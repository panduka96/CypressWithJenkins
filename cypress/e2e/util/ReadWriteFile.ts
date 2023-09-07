export class ReadWriteFile {


    GetUserInputs = async () => {

        return new Promise((accept, reject) => {
            return cy.readFile("./cypress/fixtures/userinputs.json").then((data: any) => {
                accept(data);
            });
        });

    }

    GetPasswordFromFile() {

        let password: string = "";

        cy.readFile("./cypress/fixtures/Inputs.json").then((data: any) => {
            password = data.password;
            return password;
        });

    }

}