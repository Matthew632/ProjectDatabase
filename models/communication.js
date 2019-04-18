const connection = require('../db/connection');

exports.fetchCommunicationId = () =>
  connection
    .select('*')
    .from('helper_table')
    .returning('*');
