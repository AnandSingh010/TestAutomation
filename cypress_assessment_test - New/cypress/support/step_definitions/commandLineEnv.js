export class commandLineEnv {
    Url() {
        let envi = Cypress.env('ENV'); //Get the value of evnironment variable i.e ENV
        if (envi == 'production') //Check the value
            return "https://rafat.demo.onsinch.com/"; //return desired url
        else if (envi == 'staging')
            return "https://petstore.octoperf.com/actions/Catalog.action";
        else if (envi == 'qa')
            return "https://parabank.parasoft.com/parabank/index.htm";
    }
}