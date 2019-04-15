const apiRouter = require('express').Router();
const {
  getRestaurant,
  getRestaurants,
  postImage,
  postRestaurant
} = require('../controllers/restaurants');

apiRouter
  .route('/restaurants')
  .get(getRestaurants)
  .post(postRestaurant);

apiRouter
  .route('/restaurant/:restaurant_id')
  .get(getRestaurant)
  .post(postImage);

module.exports = apiRouter;
