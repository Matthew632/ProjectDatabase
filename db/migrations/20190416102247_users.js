exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', user_table => {
    user_table.increments('user_id').primary();
    user_table.string('user_name').unique();
    user_table.string('first_name').unique();
    user_table.string('last_name').unique();
    user_table
      .string('restaurant_name')
      .references('name')
      .inTable('restaurants');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
