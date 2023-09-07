export class SystemSelectionPage {

    location_dropdown: string = "#location";
    selected_kitchen: string = "Chinese Burger - Dubai";
    dispatcher_btn: string = ":nth-child(2) > .MuiButton-label";

    clickOnLocationDropDown() {
        cy.get(this.location_dropdown).click();
    }

    selectKitchen() {
        cy.contains(this.selected_kitchen).click();
    }

    clickDispatcherBtn() {
        cy.get(this.dispatcher_btn).click();
    }

}