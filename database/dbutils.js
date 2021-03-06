const client = require('./config.js');
const table = require('../scripts/sql.js');
function runMigrate(cb) {
  const tables = `${table.location}
  ${table.passengers}
  ${table.drivers}
  ${table.trip}
  ${table.usertrip}`
  client.query(tables, cb);
}
function runQuery(query, data, cb) {
  client.query(query, data, cb)
}
function selectAll(query,cb){
  client.query(query,cb)
}

module.exports = {
  runMigrate,
  runQuery,
  selectAll
}
