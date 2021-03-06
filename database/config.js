if (process.env.NODE_ENV !== 'production'){
  require('env2')('./.env');
}
const pg = require('pg');
const config = {
  development: {
    user: 'postgres',
    password: '123654',
    database: 'ontheroad',
    port: 5432
  },
  production: {
  user: process.env.HEROKU_USER,
  password: process.env.HEROKU_PASSWORD,
  database: process.env.HEROKU_DATABASE,
  host : process.env.HEROKU_HOST,
  port: process.env.HEROKU_PORT,
  ssl: process.env.HEROKU_SSL
}
}
const client = new pg.Client(config[process.env.NODE_ENV]);
client.connect(function(error) {
  if (error) {
    throw  error;
  }
});
module.exports = client;
