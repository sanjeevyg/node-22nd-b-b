const knex = require('knex')
const connection = require('../knexfile.js')['development']
const database = knex(connection)


module.exports = {
    getAllDogs() {
       return database("dogs")
            .select()
    },
    getDogById(id) {
       return database("dogs")
            .select()
            .where({id: id}).first()
    },
    updateDog(id, dog) {
       return database("dogs")
            .where({id: id})
            .update(dog)
            .returning("*")
    },
    deleteDog(id) {
       return database("dogs")
        .where({id: id})
        .delete()
        .returning("*")
    },
    createDog(dog) {
       return database("dogs")
            .insert(dog)
            .returning("*")
    }
}