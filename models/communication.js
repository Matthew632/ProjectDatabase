const connection = require("../db/connection");

exports.fetchCommunicationId = () =>
  connection
    .select("*")
    .from("helper_table")
    .returning("*");

exports.patchCommunicationIdTable = (id, user) =>
  connection
    .select("*")
    .from("helper_table")
    .where({
      helper_table_id: 1
    })
    .update({ patched_id: id, current_user_id: user })
    .returning("*");
