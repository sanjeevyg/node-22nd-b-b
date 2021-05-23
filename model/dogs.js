const { Model } = require("objection")


class Dog extends Model {       //equivalent to class Dog < Model in Ruby
    static get tableName() {
        return 'dogs'
    }
}

module.exports = Dog