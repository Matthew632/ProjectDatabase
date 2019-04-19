const {
  fetchCommunicationId,
  patchCommunicationIdTable
} = require("../models/communication");

exports.getCommunicationId = (req, res, next) => {
  fetchCommunicationId().then(id => {
    res.status(200).send({ id });
  });
};

exports.patchCommunicationId = (req, res, next) => {
  const body = req.body.patched_id;
  const user = req.body.current_user_id || null;
  patchCommunicationIdTable(body, user).then(([id]) => {
    res.status(201).send({ id });
  });
};
