
exports.up = function(knex) {
    return knex.schema.createTable("dogs", (dog) => {
        dog.increments()
        dog.string("name")
        dog.string("breed")
        dog.string("age")
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("dogs")
};
