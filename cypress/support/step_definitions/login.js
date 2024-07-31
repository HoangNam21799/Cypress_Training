import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { userNameLabel, passwordLabel, loginButton } from '../../constant/constant'

Given('the user is on the login page', () => {
  cy.visit('/login');
});

When('the user enters valid credentials', () => {
  cy.get(userNameLabel).type(Cypress.env('username'));
  cy.get(passwordLabel).type(Cypress.env('password'));
  cy.get(loginButton).click();
});

Then('the user should be redirected to the dashboard', () => {
  cy.url().should('include', '/dashboard');
});

When('the user enters invalid credentials', () => {
  cy.get(userNameLabel).type(Cypress.env('wrongUsername'));
  cy.get(passwordLabel).type(Cypress.env('wrongPassword'));
  cy.get(loginButton).click();
});

Then('an error message should be displayed', () => {
  cy.get('.error-message').should('be.visible').and('contain', 'ログインIDまたはパスワードが間違っています。');
});
