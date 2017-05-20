const express = require('express');
const router = express.Router();
const login = require('./handlers/login.js');
const passenger = require('./handlers/passengerSignup.js');
const driver = require('./handlers/driverSignup.js');
const rides = require('./handlers/rides.js');
const ladyRides = require('./handlers/ladyRides.js');
const newRide = require('./handlers/newRide.js');
const rideRequset = require('./handlers/rideRequset.js');
const myRides = require('./handlers/myRides.js');

router.post('/login',login)
router.post('/passengerSignup',passenger)
router.post('/driverSignup',driver)
router.get('/rides',rides)
router.get('/ladyRides',ladyRides)
router.post('/newRide',newRide)
router.post('/rideRequset',rideRequset)
router.get('/myRides',myRides)

module.exports = router;
