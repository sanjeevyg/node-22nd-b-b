const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors())
app.use(express.json())

const knex = require('knex')
const connection = require('./knexfile.js')['development']
const database = knex(connection)
const { createDog, deleteDog, updateDog, getDogById, getAllDogs } = require("./queries")
const port = 7000

const { Model } = require("objection")
Model.knex(database)

const Dog = require("./model/dogs")

app.get("/dogs", (request, response) => {
    // Dog.query()          // equivalent to Dog.all in ruby
        getAllDogs()
        .then(dogs => {
            response.json({dogs})
        })
})

app.get("/dogs/:id", (request, response) => {
        const id = request.params.id
        getDogById(id)
        .then(dog => {
            response.json({dog})
        })
})

app.patch("/dogs/:id", (request, response) => {
    const id = request.params.id
    const dog = request.body
        updateDog(id, dog)
        .then(dog => {
            response.json({ dog })
        })
})

app.post("/dogs", (request, response) => {
    const dog = request.body
        createDog(dog)
        .then(dog => {
            response.json({dog})
        })
})

app.delete("/dogs/:id", (request, response) => {
    const id = request.params.id
        deleteDog(id)
        .then(() => response.send({message: `dog with id ${id} is deleted` }))
})

app.listen(port, () => {
    console.log(`listening to ${port}`)
})