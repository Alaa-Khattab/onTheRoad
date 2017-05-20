const express = require('express');
require('env2')('./.env')
const cookieParser = require('cookie-parser');
const dbutils = require('./database/dbutils.js');
var expressSession = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
const router = require('./backEnd/router.js');
const app = express();


app.use(express.static(path.join(__dirname, 'public/src')));
app.use(express.static(path.join(__dirname, 'public/js')));
app.use(express.static(path.join(__dirname, 'public/stylesheets')));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cookieParser());
app.use(bodyParser.json());
app.use(expressSession({secret:process.env.SECRET,cookie:{maxAge:3 * 24 * 60 * 60 * 1000}}));
app.use(router);
dbutils.runMigrate((error) => {
  if (error)  throw error
    app.listen(
      3000,
      () =>
      console.log(`Server is listening on port:`, 3000)
    );
});
