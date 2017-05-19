const express = require('express');
const router = express.Router();
const login = require('./handlers/login.js');
const passenger = require('./handlers/passengerSignup.js');
const driver = require('./handlers/driverSignup.js');
const rides = require('./handlers/rides.js');

router.post('/login',login)
router.post('/passengerSignup',passenger)
router.post('/driverSignup',driver)
router.get('/rides',rides)
module.exports = router;
