const { fetchCommunicationId } = require('../models/communication');

exports.getCommunicationId = (req, res, next) => {
  fetchCommunicationId().then(id => {
    res.status(200).send({ id });
  });
};
