
const answers = ['Amy Poehler', 'New Zealand', 'China', 'Red and Green', 'Guardians of the Galaxy', 'Jonah Hill and Channing Tatum', 'Prepare to die.']
const wrongAnswers = ['Tina Fey', 'Ireland', 'Vietnam', 'Orange and Green', 'The Hunger Games: Mockingjay Part 1', 'Seth Rogen and James Franco', 'And now, you will pay.']

//
Cypress.Commands.add('runThroughTest', (answers, color) => {
    for(let i=0; i <= answers.length-1; i++){
      cy.contains(answers[i]).click()
      cy.contains(answers[i]).should('have.css', 'background-color', 'rgb(245, 167, 108)')
      cy.contains(answers[i]).should('have.css', 'background-color', `${color}`)
    }  
})

//Test entrying the server. This should fail if the server isn't up
describe('Starting Test', () => {
  it('Visit Starting Page', () => {
    cy.visit('127.0.0.1:3000')
  })
})

//Picking all the correct answers
//Must convert hex to rgb for the .should to work properly
describe('Pick All Correct Answers', () => {
  it('100% the Quiz', () => {
    cy.visit('127.0.0.1:3000')
    cy.runThroughTest(answers, 'rgb(90, 245, 157)')
    cy.get('#numberCorrect').contains('100%')
  })
})

//Picking all the Wrong answers
//Must convert hex to rgb for the .should to work properly
describe('Pick All Wrong Correct Answers', () => {
  it('0% the Quiz', () => {
    cy.visit('127.0.0.1:3000')
    cy.runThroughTest(wrongAnswers, 'rgb(245, 90, 152)')
    cy.get('#numberCorrect').contains('0%')
  })
})

