const connection = require('../db/connection');

exports.addUser = newUser =>
  connection
    .insert(newUser)
    .into('users')
    .returning('*');

exports.fetchUsers = () => connection.select('*').from('users');

exports.fetchUser = id =>
  connection
    .select('*')
    .from('users')
    .where(id);
