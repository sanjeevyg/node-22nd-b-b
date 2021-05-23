
exports.seed = async knex => {
  // Deletes ALL existing entries
  await knex('dogs').del()
  await knex('dogs').insert([
        {id: 1, name: 'Bixy'},
        {id: 2, name: 'Tommy'},
        {id: 3, name: 'Jackey'}
      ]);
}
