const { restaurantsData } = require('../db/data');

exports.seed = (knex, Promise) =>
  knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() =>
      knex
        .insert(restaurantsData)
        .into('restaurants')
        .returning('*')
    )
    .then(() => {
      knex
        .insert(helperTableData)
        .into('helper_table')
        .returning('*');
    });
