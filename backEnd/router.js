const express = require('express');
const router = express.Router();
const handlers = require('./handlers/index.js');

router.get('/',handlers.home);
module.exports = router;
