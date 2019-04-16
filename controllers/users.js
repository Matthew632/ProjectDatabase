const { addUser, fetchUsers, fetchUser } = require('../models/users');

exports.postUser = (req, res, next) => {
  const body = req.body;

  addUser(body).then(([user]) => {
    res.status(201).send({ user });
  });
};

exports.getUsers = (req, res, next) => {
  fetchUsers().then(users => {
    res.status(200).send({ users });
  });
};

exports.getUser = (req, res, next) => {
  const id = req.params;
  fetchUser(id).then(([user]) => {
    console.log(user);
    res.status(200).send({ user });
  });
};
