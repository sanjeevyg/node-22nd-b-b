const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const knex = require('knex')
const connection = require('./knexfile.js')['development']
const database = knex(connection)

const port = 7000

app.listen(port, () => {
    console.log(`listening to ${port}`)
})