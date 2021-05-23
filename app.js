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

class Dog extends Model {       //equivalent to class Dog < Model in Ruby
    static get tableName() {
        return 'dogs'
    }
}

app.get("/dogs", (request, response) => {
    Dog.query()          // equivalent to Dog.all in ruby
        .then(dogs => {
            response.json({dogs})
        })
})

app.listen(port, () => {
    console.log(`listening to ${port}`)
})