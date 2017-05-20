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
      if (result1.rows.user_id === userId) {
        res.json({
          msg: 'You cannot join a ride you have created'
        })
      } else {
        ride.getUserIdByTripIdFromUserTrip(tripId, (err, result2) => {
          if (err) {
            return res.status(500).send('Something broke!')
          }
          if (result2.rows.user_id === userId) {
            res.json({
              msg: 'You have already joined this ride'
            })
          } else {
            const rideOwnerId = result1.rows.user_id
            user.getGender(rideOwnerId, (err, result3) => {
              if (err) {
                return res.status(500).send('Something broke!')
              }
              // gender = 0 ====>> female
              if (result3.rows.gender === 0) {
                user.getGender(userId, (err, result4) => {
                  if (err) {
                    return res.status(500).send('Something broke!')
                  }
                  if (result4.rows.gender === 0) {
                    ride.joinedRide({
                      trip_id: tripId,
                      user_id: userId
                    }, (err) => {
                      if (err) {
                        return res.status(500).send('Something broke!')
                      }
                      const seats = result1.rows.available_seats + 1;
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
                      msg: 'you are not allowed to join this ride'
                    })
                  }
                })

              } else {
                ride.joinedRide({
                  trip_id: tripId,
                  user_id: userId
                }, (err) => {
                  if (err) {
                    return res.status(500).send('Something broke!')
                  }
                  const seats = result1.rows.available_seats + 1;
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
          }
        })
      }
    })
  } else {
    res.json({
      msg: 'You should login before joining this ride'
    })
  }

}
