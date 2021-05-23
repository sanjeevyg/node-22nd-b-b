
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dogs').del()
    .then(function () {
      // Inserts seed entries
      return knex('dogs').insert([
        {id: 1, name: 'Bixy'},
        {id: 2, name: 'Tommy'},
        {id: 3, name: 'Jackey'}
      ]);
    });
};
