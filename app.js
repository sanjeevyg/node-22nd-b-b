const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors())
app.use(express.json())

const knex = require('knex')
const connection = require('./knexfile.js')['development']
const database = knex(connection)

const port = 7000

const { Model } = require("objection")
Model.knex(database)

const Dog = require("./model/dogs")

app.get("/dogs", (request, response) => {
    Dog.query()          // equivalent to Dog.all in ruby
        .then(dogs => {
            response.json({dogs})
        })
})

app.get("/dogs/:id", (request, response) => {
    database("dogs")
        .select()
        .where({id: request.params.id}).first()
        .then(dog => {
            response.json({dog})
        })
})

app.patch("/dogs/:id", (request, response) => {
    const dog = request.body
    database("dogs")
        .where({id : request.params.id})
        .update(dog)
        .returning("*")
        .then(dog => {
            response.json({ dog })
        })
})

app.post("/dogs", (request, resposne) => {
    database("dogs")
        .insert(dog)
        .returning("*")
        .then(dog => {
            response.json({ dog })
        })
})

app.delete("/dogs", (request, response) => {
    const id = request.params.id
    database("dogs")
        .where({id: request.params.idx})
        .delete()
        .then(() => {
            response.json({ message: `dog ${id} is deleted`})
        })
})

app.listen(port, () => {
    console.log(`listening to ${port}`)
})