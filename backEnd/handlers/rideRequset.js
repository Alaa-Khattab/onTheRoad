const ride = require('../../database/ridesHelpers.js');
const user = require('../../database/userHelpers.js');
module.exports = function rideRequset(req, res) {
  if (req.session.userId) {
    const tripId = req.body.trip_id
    const userId = req.session.userId
    ride.getUserIdByTripId(tripId, (err, result1) => {
      if (err) {
        return res.status(500).send('Something broke!')
      }
      const tripOwnerId = result1.rows[0].user_id;
      console.log('tripOwner:', tripOwnerId);
      user.getGenderDriver(tripOwnerId, (err, result2) => {
        if (err) {
          return res.status(500).send('Something broke!')
        }
        const onwnerGender = result2.rows[0].gender;
        user.getGenderPassenger(userId, (err, result3) => {
          if (err) {
            return res.status(500).send('Something broke!')
          }
          const joinedGender = result3.rows[0].gender;
          if (onwnerGender === 0) {
            if (joinedGender === 0) {
              ride.joinedRide({
                trip_id: tripId,
                user_id: userId
              }, (err) => {
                if (err) {
                  return res.status(500).send('Something broke!')
                }
                const seats = result1.rows[0].available_seats - 1;
                ride.updateSeats({
                  trip_id: tripId,
                  available_seats: seats
                }, (err) => {
                  if (err) {
                    return res.status(500).send('Something broke!')
                  }
                })
              })
            } else {
              res.json({
                msg: 'no allowed to join'
              })
            }
          } else {
            ride.joinedRide({
              trip_id: tripId,
              user_id: userId
            }, (err) => {
              if (err) {
                return res.status(500).send('Something broke!')
              }
              const seats = result1.rows[0].available_seats - 1;
              ride.updateSeats({
                trip_id: tripId,
                available_seats: seats
              }, (err) => {
                if (err) {
                  return res.status(500).send('Something broke!')
                }
              })
            })
          }
        })
      })
    })
  } else {
    res.json({
      msg: 'You should login before joining this ride'
    })
  }
}
