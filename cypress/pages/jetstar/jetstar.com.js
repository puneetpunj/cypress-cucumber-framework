class JetstarHomePage {
  static visit() {
    cy.visit('/');
  }

  static clickSignIn() {
    cy.get('.mainmenu__global-login-cta').click()
    cy.get('.j-button--primary')
      .contains('Sign in').click({ force: true });
  }

  static enterCredentials(username, password) {
    cy.get('#input-7456722').type(username)
    cy.get('#input-52575562').type(password)
    // cy.get('#gigya-login-form > :nth-child(4) > .jetstar-input-wrapper > .j-button')
    cy.get('.j-button').contains('Sign in').click()
  }

  static checkInvalidEmailErrorMessage = () => {
    cy.get('#gigya-login-form > :nth-child(1) > .jetstar-input-wrapper > .jetstar-custom-error').contains('E-mail address is invalid.')
  }
}

export default JetstarHomePage;
