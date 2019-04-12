const { fetchRestaurant } = require("../models/restaurants");

function fetchRestaurant(req, res, next) {
    const params = {req.params.restaurant_id}
    fetchRestaurant(params).then(fetchedRestaurants => {
        res.status(200).send({restaurant: fetchedRestaurants })
    })
}

module.exports = { getRestaurant };
