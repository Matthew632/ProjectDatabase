const {
  fetchRestaurants,
  addRestaurant,
  fetchRestaurant,
  patchRating
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

exports.editRating = (req, res, next) => {
  const { table_booking } = req.body;
  patchRating(req.params, table_booking).then(patchedRating => {
    res.status(200).send({ rating: patchedRating[0] });
  });
};
