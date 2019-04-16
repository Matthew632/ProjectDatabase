exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', user_table => {
    user_table.increments('user_id').primary();
    user_table.string('userName').notNullable();
    user_table.string('first_name').notNullable();
    user_table.string('last_name').notNullable();
    user_table
      .integer('restaurant_id')
      .references('restaurant_id')
      .inTable('restaurants');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
