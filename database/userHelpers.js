
const dbutils = require('./dbutils.js');
function getUserByEmailFromPassenger  (email,password, cb) {
  const query = `SELECT
  user_id
  FROM passengers
  WHERE email=$1 AND password=$2`;
  dbutils.runQuery(query, [email,password], cb)
}
function getUserByEmailFromDriver (email,password, cb) {
  const query = `SELECT
  user_id
  FROM drivers
  WHERE email=$1 AND password=$2`;
  dbutils.runQuery(query, [email,password], cb)
}
module.exports={
  getUserByEmailFromPassenger,
  getUserByEmailFromDriver
}
