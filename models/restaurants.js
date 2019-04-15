const connection = require('../db/connection');

exports.fetchRestaurant = params =>
  connection
    .select('image_path')
    .from('images')
    .where(params);

exports.fetchRestaurants = () => connection.select('*').from('restaurants');

exports.insertRestaurantImage = input =>
  connection
    .insert(input)
    .into('images')
    .returning('*');
