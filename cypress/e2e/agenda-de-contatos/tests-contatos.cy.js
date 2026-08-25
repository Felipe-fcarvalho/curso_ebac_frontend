/// <reference types="cypress" />

describe('Testes para página de contatos', () => {
  beforeEach(() => {
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
  })

  it('Deve incluir um contato', () => {
    cy.get('[placeholder="Nome"]').type('Felipe Ferreira')
    cy.get('[placeholder="E-mail"]').type('Felipe@email.com')
    cy.get('[placeholder="Telefone"]').type('11 91234-5678')
    cy.get('.adicionar').click()
    cy.contains('Felipe Ferreira').should('be.visible')
    cy.screenshot('tela-adição')
  })

  it('Deve editar um contato', () => {
    cy.get(':nth-child(3) > .sc-gueYoa > .edit').click()
    cy.get('[placeholder="Nome"]').clear().type('Felipe Lacerda')
    cy.get('.alterar').click()
    cy.contains('Felipe Lacerda').should('be.visible')
    cy.contains('Felice Lacerda').should('not.exist')
    cy.screenshot('tela-edição')
  })

  it('Deve remover um contato', () => {
    cy.get(':nth-child(3) > .sc-gueYoa > .delete').click()
    cy.contains('Felipe Ferreira li').should('not.exist')
    cy.screenshot('tela-remoção')
  })
})
