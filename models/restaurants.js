const connection = require("../db/connection");

exports.fetchRestaurant = restaurant_id =>
  connection
    .select("*")
    .from("restaurants")
    .where(restaurant_id);

exports.fetchRestaurants = () => connection.select("*").from("restaurants");

exports.addRestaurant = input =>
  connection
    .insert(input)
    .into("restaurants")
    .returning("*");

exports.patchRating = (restaurant_id, rating) =>
  connection
    .select("*")
    .from("restaurants")
    .where(restaurant_id)
    .update({ rating: rating })
    .returning("*");
