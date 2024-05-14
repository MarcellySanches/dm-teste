/// <reference types="cypress" />

const livroGitPocketGuide = 'Git Pocket Guide'
const login= "Marcelly1234"
const password = "Marcelly1234!"

Cypress.on('uncaught:exception', (err, runnable) => {
   return false
})

describe('Campo de busca de produtos', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/books')
  })

  it('Executa login na aplicação', () => {
    cy.get('#login').click()
    cy.get('#userName').type(login)
    cy.get('#password').type(password)
    cy.get('#login').click()
    cy.get("#userName-value").should("have.text", login)
  })

  it('Pesquisa um produto pelo nome', () => {
    cy.get('#searchBox').type(livroGitPocketGuide)
    cy.get('#basic-addon2').click()
    cy.get('.rt-tbody > :nth-child(1)').should('contains.text', livroGitPocketGuide)
  })

  it('Pesquisa um produto por palavra chave', () => {
    cy.get('#searchBox').type("pocket")
    cy.get('#basic-addon2').click()
    cy.get('.rt-tbody > :nth-child(1)').should('contains.text', livroGitPocketGuide)
  })

  it('Pesquisa um produto pela categoria autor', () => {
    cy.get('#searchBox').type("richard")
    cy.get('#basic-addon2').click()
    cy.get('.rt-tbody > :nth-child(1)').should('contains.text', livroGitPocketGuide)
  })
  
})
