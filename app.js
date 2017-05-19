const express = require('express');
const cookieParser = require('cookie-parser');
const dbutils = require('./database/dbutils.js');
const app = express();

const router = require('./backEnd/router.js');

app.use(express.static('public'));
app.use(cookieParser());

app.use(router);
dbutils.runMigrate((error) => {
  if (error) throw error
    app.listen(
      3000,
      () =>
      console.log(`Server is listening on port:`, 3000)
    );
});
