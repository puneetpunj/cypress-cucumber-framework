class Browser {

  static expect() {
    return {
      toBeInDotRezDomain: () => cy.url().should('include', 'booking.jetstar.com'),
    };
  }
}

export default Browser;
