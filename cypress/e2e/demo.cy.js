describe('My First Test', () => {
  it('Visits the Cypress documentation page', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="product-sort-container"]').select(2)
    for (let i = 1; i <= 5; i++) {
      cy.get(`:nth-child(${i}) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]`).invoke('text')
        .then(value => {
          let price = parseFloat(value.replace('$', ''))
          cy.get(`:nth-child(${i + 1}) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]`).invoke('text')
            .then(value2 => {
              let price2 = parseFloat(value2.replace('$', ''))
              expect(price).lte(price2)
            })
        })
    }
    // cy.get(`:nth-child(1) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]`)
    // .then($prices => {
    //   const prices = [];

    //   $prices.each((index, price) => {
    //     prices.push(parseFloat(Cypress.$(price).text().replace('$', '')));
    //   });

    //   const sortedPrices = [...prices].sort((a, b) => a - b);
    //   expect(prices).to.deep.equal(sortedPrices);
    // });


  })
})