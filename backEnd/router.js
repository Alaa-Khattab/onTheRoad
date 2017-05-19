const express = require('express');
const router = express.Router();
const login = require('./handlers/login.js');
const passenger = require('./handlers/passengerSignup.js');
const driver = require('./handlers/driverSignup.js');

router.post('/login',login)
router.post('/passengerSignup',passenger)
router.post('/driverSignup',driver)
module.exports = router;
