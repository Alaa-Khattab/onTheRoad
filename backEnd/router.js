const express = require('express');
const router = express.Router();
const handlers = require('./handlers/index.js');
const loginHnadler = require('./handlers/login.js');

router.get('/',handlers.home);
router.get('/login',loginHnadler.login)
module.exports = router;
