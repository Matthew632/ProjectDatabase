const apiRouter = require('express').Router();
const {
  getRestaurant,
  getRestaurants,
  postRestaurant
} = require('../controllers/restaurants');

const { getUsers, postUser, getUser } = require('../controllers/users');
const {
  getCommunicationId,
  patchCommunicationId
} = require('../controllers/communication');

apiRouter
  .route('/restaurants')
  .get(getRestaurants)
  .post(postRestaurant);

apiRouter.route('/restaurants/:restaurant_id').get(getRestaurant);

apiRouter
  .route('/users')
  .get(getUsers)
  .post(postUser);

apiRouter.route('/users/:user_id').get(getUser);

apiRouter
  .route('/communication')
  .get(getCommunicationId)
  .patch(patchCommunicationId);

module.exports = apiRouter;
