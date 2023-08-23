/*
 * verify avaliable dates on page in [MMM, DD, YYYY] format
 */
Cypress.Commands.add("verifyDate", (loc, index, date) => {
  cy.get(loc)
    .eq(index)
    .invoke("text")
    .then((text) => {
      if (
        Cypress.moment(date).isSame(Cypress.moment(text).format("MMM DD, YYYY"))
      ) {
        expect(Cypress.moment(text).format("MMM DD, YYYY")).eq(date);
      } else if (
        Cypress.moment(date).isAfter(
          Cypress.moment(text).format("MMM DD, YYYY")
        )
      ) {
        expect(
          Cypress.moment(date).isAfter(
            Cypress.moment(text).format("MMM DD, YYYY")
          ),
          `${Cypress.moment(date).format(
            "MMM DD, YYYY"
          )} should appear after ${Cypress.moment(text).format("MMM DD, YYYY")}`
        ).to.be.true;
      } else {
        expect(
          Cypress.moment(date).isBefore(
            Cypress.moment(text).format("MMM DD, YYYY")
          ),
          `${Cypress.moment(date).format(
            "MMM DD, YYYY"
          )} should appear before ${Cypress.moment(text).format(
            "MMM DD, YYYY"
          )}`
        ).to.be.true;
      }
    });
});
