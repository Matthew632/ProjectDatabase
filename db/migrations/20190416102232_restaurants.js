exports.up = function(knex, Promise) {
  return knex.schema.createTable('restaurants', restaurant_table => {
    restaurant_table.increments('restaurant_id').primary();
    restaurant_table.string('name').unique();
    restaurant_table.text('description').notNullable();
    restaurant_table.integer('rating').defaultTo(0);
    restaurant_table.string('photo_url', 400);
    restaurant_table.string('address', 400);
    restaurant_table.string('link_to_360', 400).notNullable();

    restaurant_table
      .date('created_at', 6)
      .defaultTo(knex.fn.now(6))
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('restaurants');
};
