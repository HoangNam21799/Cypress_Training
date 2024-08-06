import { DataTest } from '../constant/constant'

describe('My First Test', () => {
  // it('Test Price low to high', () => {
  //   cy.visit('https://www.saucedemo.com/')
  //   cy.get('[data-test="username"]').type('problem_user')
  //   cy.get('[data-test="password"]').type('secret_sauce')
  //   cy.get('[data-test="login-button"]').click()
  //   cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  //   cy.get('[data-test="product-sort-container"]').select(2)
  //   for (let i = 1; i <= 5; i++) {
  //     cy.get(`:nth-child(${i}) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]`).invoke('text')
  //       .then(value => {
  //         let price = parseFloat(value.replace('$', ''))
  //         cy.get(`:nth-child(${i + 1}) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]`).invoke('text')
  //           .then(value2 => {
  //             let price2 = parseFloat(value2.replace('$', ''))
  //             expect(price).lte(price2)
  //           })
  //       })
  //   }
  // }),
  it('Test get items', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    for (let i = 0; i < DataTest.length; i++ ) {
      cy.get(DataTest[i]).click()
      cy.get('[data-test="shopping-cart-badge"]').should('exist')
      cy.get('[data-test="shopping-cart-badge"]').should('have.text', (i + 1))
    }
    

  })
})