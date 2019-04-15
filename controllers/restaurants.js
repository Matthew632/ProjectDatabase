const {
  fetchRestaurant,
  fetchRestaurants,
  insertRestaurantImage,
  addRestaurant
} = require('../models/restaurants');

exports.getRestaurant = (req, res, next) => {
  const params = { restaurant_id: req.params.restaurant_id };

  fetchRestaurant(params).then(([restaurant]) => {
    res.status(200).send({ restaurant });
  });
};

exports.getRestaurants = (req, res, next) => {
  fetchRestaurants().then(restaurants => {
    res.status(200).send({ restaurants });
  });
};

exports.postImage = (req, res, next) => {
  const body = req.body;
  const id = req.params;
  const input = {
    image_path: body.image_path,
    restaurant_id: id.restaurant_id
  };

  insertRestaurantImage(input).then(([image]) => {
    res.status(201).send({ image });
  });
};

exports.postRestaurant = (req, res, next) => {
  const body = req.body;
  addRestaurant(body).then(([restaurant]) => {
    res.status(201).send({ restaurant });
  });
};
