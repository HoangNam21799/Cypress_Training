import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('the user is on the login page', () => {
  cy.visit('https://dev.pamnas2.jp/login');
});

When('the user enters valid credentials', () => {
  cy.get('input[name="username"]').type('testuser');
  cy.get('input[name="password"]').type('password');
  cy.get('button[type="submit"]').click();
});

Then('the user should be redirected to the dashboard', () => {
  cy.url().should('include', '/dashboard');
});

When('the user enters invalid credentials', () => {
  cy.get('input[name="username"]').type('wronguser');
  cy.get('input[name="password"]').type('wrongpassword');
  cy.get('button[type="submit"]').click();
});

Then('an error message should be displayed', () => {
  cy.get('.error-message').should('be.visible').and('contain', 'Invalid credentials');
});