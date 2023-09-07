export class DispatcherHomePage {

    waiting_for_pickup_tab: string = ".jss107 > .MuiTypography-root";

    checkVisibilityOfElement = () => {
        cy.get(this.waiting_for_pickup_tab).should('be.visible');
    }

    varifyOrderReceiving = (orderNo: string) => {
        cy.contains(orderNo).should('be.visible');
    }

}