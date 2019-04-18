const {
  fetchCommunicationId,
  patchCommunicationIdTable
} = require('../models/communication');

exports.getCommunicationId = (req, res, next) => {
  fetchCommunicationId().then(([id]) => {
    res.status(200).send({ id });
  });
};

exports.patchCommunicationId = (req, res, next) => {
  const body = req.body.patched_id;
  patchCommunicationIdTable(body).then(([id]) => {
    res.status(201).send({ id });
  });
};
