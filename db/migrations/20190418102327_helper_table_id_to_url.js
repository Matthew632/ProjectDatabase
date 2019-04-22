exports.up = function(knex, Promise) {
  return knex.schema.createTable('helper_table', helper_table => {
    helper_table.increments('helper_table_id').primary();
    helper_table.integer('patched_id');
    helper_table.integer('patched_table_id').defaultTo(null);
    helper_table.integer('current_user_id').defaultTo(null);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('helper_table');
};
