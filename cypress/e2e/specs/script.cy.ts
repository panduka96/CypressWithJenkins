import { LoginPage } from "../pages/LoginPage";
import { SystemSelectionPage } from "../pages/SystemSelectionPage";
import { DispatcherHomePage } from "../pages/DispatcherHomePage";
import { ReadWriteFile } from "../util/ReadWriteFile";

const loginPage = new LoginPage();
const sysSelectionPage = new SystemSelectionPage();
const dispatcherHomePage = new DispatcherHomePage();
const readWriteFile = new ReadWriteFile

describe("Dispatcher Testing", () => {

    let user_inputs: any;
    let user_details: any;
    let talabat_payload: any;

    before(() => {

        cy.fixture("userinputs.json").then((data: any) => {
            user_inputs = data;
        });

        cy.fixture("userdetails.json").then((data: any) => {
            user_details = data;
        });
        cy.fixture("talabatpayload.json").then((data: any) => {
            const now: Date = new Date();
            const createdAt: string = now.toISOString();
            const orderId: string = Date.now().toString();
            talabat_payload = data;
            talabat_payload.token = orderId;
            talabat_payload.code = orderId;
        });

    });

    it("Verify Dispatcher Login", () => {

        cy.visit(user_inputs.url);
        loginPage.enterUsername(user_inputs.username);
        loginPage.enterPassword(user_inputs.password);
        loginPage.clickLogin();

        sysSelectionPage.clickOnLocationDropDown();
        sysSelectionPage.selectKitchen();
        sysSelectionPage.clickDispatcherBtn();

        dispatcherHomePage.checkVisibilityOfElement();

    });

    it('Verify create an delivery by Restaurant order (Talabat)', () => {

        cy.request({
            method: 'POST',
            url: user_details.talabaturl,
            body: talabat_payload
        }).then((res: any) => {
            expect(res.status).to.be.equal(202);
        });

    });

    // it("Verify order is receiving to Dispatcher", () => {
    //
    //     cy.visit(user_inputs.url);
    //     loginPage.enterUsername(user_inputs.username);
    //     loginPage.enterPassword(user_inputs.password);
    //     loginPage.clickLogin();

    //     sysSelectionPage.clickOnLocationDropDown();
    //     sysSelectionPage.selectKitchen();
    //     sysSelectionPage.clickDispatcherBtn();

    //     dispatcherHomePage.checkVisibilityOfElement();
    //     dispatcherHomePage.varifyOrderReceiving(talabat_payload.code);

    // });
    //
    //
});