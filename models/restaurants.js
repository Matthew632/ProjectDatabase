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
