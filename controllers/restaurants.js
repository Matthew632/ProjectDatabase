const {
  fetchRestaurants,
  addRestaurant,
  fetchRestaurant
} = require('../models/restaurants');

exports.getRestaurant = (req, res, next) => {
  const restaurant_id = req.params;

  fetchRestaurant(restaurant_id).then(([restaurant]) => {
    res.status(200).send({ restaurant });
  });
};

exports.getRestaurants = (req, res, next) => {
  fetchRestaurants().then(restaurants => {
    res.status(200).send({ restaurants });
  });
};

exports.postRestaurant = (req, res, next) => {
  const body = req.body;

  addRestaurant(body).then(([restaurant]) => {
    res.status(201).send({ restaurant });
  });
};
