export class LoginPage {

    username_textbox: string = '//*[@id="username"]';
    password_textbox: string = '//*[@id="outlined-adornment-password"]';
    login_button: string = '//*[@id="root"]/div[2]/div/div/main/div[2]/div/button';

    enterUsername(username: string) {
        cy.xpath(this.username_textbox).type(username);
    }

    enterPassword(password: string) {
        cy.xpath(this.password_textbox).type(password);
    }

    clickLogin() {
        cy.xpath(this.login_button).click();
    }

}