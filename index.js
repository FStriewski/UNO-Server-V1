const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Cards = require('./models/cards')

app.use(bodyParser.json())
app.listen('4001', () => console.log('UNO Express Server listening on port 4001'))


// Retrieve all cards:
app.get('/cards', (request, response) => {
  Cards.findAll()
    .then(cards => {
      response.send({ cards })
    })
    .catch(error => {
      response.status(500).send({
        message: `Something went wrong`,
        error
      })
    })
})

// Retrieve card by id:
app.get('/cards/:id', (request, response) => {
  const cardId = request.params.id
  Cards.findById(cardId)
    .then (card => {
      response.send({card})
    })
    .catch(error => {
      response.status(500).send({
        message: `Something went wrong`,
        error
      })
    })
})

// Update Card location attribute:
app.put('/cards/:id', (request, response) => {
  const cardId = request.params.id
  const updates = request.body
  
  Cards.findById(cardId)
    .then(card => {
      return card.update(updates)
    })
    .then(final => {
      response.send(final)
    })
    .catch(error => {
      response.status(500).send({
        message: `Something went wrong`,
        error
      })
    })
})
