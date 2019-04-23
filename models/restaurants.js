const connection = require('../db/connection');

exports.fetchRestaurant = restaurant_id =>
  connection
    .select('*')
    .from('restaurants')
    .where(restaurant_id);

exports.fetchRestaurants = () => connection.select('*').from('restaurants');

exports.addRestaurant = input =>
  connection
    .insert(input)
    .into('restaurants')
    .returning('*');

exports.patchRating = (restaurant_id, booking) =>
  connection
    .select('*')
    .from('restaurants')
    .where(restaurant_id)
    .update({ table_booking: booking })
    .returning('*');
