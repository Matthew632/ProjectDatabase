const apiRouter = require('express').Router();
const {
  getRestaurant,
  getRestaurants,
  postRestaurant
} = require('../controllers/restaurants');

apiRouter.route('/restaurants').get(getRestaurants);
//.post(postRestaurant);
apiRouter
  .route('/restaurant/:restaurant_id')
  .get(getRestaurant)
  .post(postRestaurant);

module.exports = apiRouter;
