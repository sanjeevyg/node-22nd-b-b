

exports.seed = async function(knex) {
  await knex('dogs').del()
  await knex('dogs').insert([
    {id: 1, name: 'Bixy', breed: 'Husky', age: 2},
    {id: 2, name: 'Cutie', breed: 'Shepard', age: 3},
    {id: 3, name: 'Maxy',  breed: 'Jack Chee', age: 1}
  ]);
  }
