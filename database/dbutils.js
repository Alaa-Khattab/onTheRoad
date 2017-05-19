const client = require('./config.js');
const table = require('../scripts/sql.js');
function runMigrate(cb) {
  const tables = `${table.location}
  ${table.passengers}
  ${table.drivers}
  ${table.trip}
  ${table.usertrip}`
  console.log('alaaaa');
  client.query(tables, cb);
}
function runQuery(query, data, cb) {
  client.query(query, data, cb)
}

module.exports = {
  runMigrate,
  runQuery
}
