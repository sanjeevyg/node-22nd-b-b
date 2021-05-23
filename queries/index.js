const knex = require('knex')
const connection = require('./knexfile.js')['development']
const database = knex(connection)


// module.exports = {
//     getAllStudents() {

//     }
// }