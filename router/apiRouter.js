const apiRouter = require('express').Router();
const {
  getRestaurant,
  getRestaurants,
  postRestaurant
} = require('../controllers/restaurants');

const { getUsers, postUser, getUser } = require('../controllers/users');

apiRouter
  .route('/restaurants')
  .get(getRestaurants)
  .post(postRestaurant);

apiRouter.route('/restaurant/:restaurant_id').get(getRestaurant);

apiRouter
  .route('/users')
  .get(getUsers)
  .post(postUser);

apiRouter.route('/user/:user_id').get(getUser);

module.exports = apiRouter;
