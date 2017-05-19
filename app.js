const express = require('express');
const cookieParser = require('cookie-parser');
const dbutils = require('./database/dbutils.js');
var expressSession = require('express-session');
var bodyParser = require('body-parser');
const router = require('./backEnd/router.js');
const app = express();


app.use(express.static('public'));
app.use(cookieParser());
app.use(cookieParser());
app.use(expressSession({secret:'somesecrettokenhere'}));

app.use(router);
dbutils.runMigrate((error) => {
  if (error)
    throw error
    app.listen(
      3000,
      () =>
      console.log(`Server is listening on port:`, 3000)
    );
});
