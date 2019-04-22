const connection = require('../db/connection');

exports.fetchCommunicationId = () =>
  connection
    .select('*')
    .from('helper_table')
    .returning('*');

exports.patchCommunicationIdTable = (id, user, table_id) =>
  connection
    .select('*')
    .from('helper_table')
    .where({
      helper_table_id: 1
    })
    .update({
      patched_id: id,
      current_user_id: user,
      patched_table_id: table_id
    })
    .returning('*');
