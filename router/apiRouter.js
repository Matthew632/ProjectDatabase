const apiRouter = require("express").Router();
const { getRestaurant } = require("../controllers/restaurants");

apiRouter.route("/restaurant/:restaurant_id").get(getRestaurant);

module.exports = apiRouter;
