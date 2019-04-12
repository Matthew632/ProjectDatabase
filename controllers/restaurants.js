const { fetchRestaurant } = require("../models/restaurants");

function getRestaurant(req, res, next) {
  const params = { restaurant_id: req.params.restaurant_id };
  fetchRestaurant(params).then(fetchedRestaurants => {
    res.status(200).send({ restaurant: fetchedRestaurants });
  });
}

module.exports = { getRestaurant };
