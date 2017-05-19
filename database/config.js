
const pg = require('pg');
const config = {
  development: {
    user: 'postgres',
    password: '123654',
    database: 'ontheroad',
    port: 5432
  },
  test: {
    user: 'postgres',
    password: '123654',
    database: 'tests',
    port: 5432
  }
}
const client = new pg.Client(config.development);
client.connect(function(error) {
  if (error) {
    throw  error;
  }
});
module.exports = client;
