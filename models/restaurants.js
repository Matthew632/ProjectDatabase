const connection = require("../db/connection");

const fetchRestaurant = params =>
  connection
    .select("image_paths")
    .from("images")
    .where(params);

module.exports = {
  fetchRestaurant
};
