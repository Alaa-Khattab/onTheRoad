const ride = require('../../database/ridesHelpers.js');
module.exports = function myRides(req, res) {
  if (req.session.userId) {
    const user_id = req.session.userId
    ride.getJoinedRides(user_id, (err, result) => {
      if (err) {
        return res.status(500).send('Something broke!')
      }
      if (result.rowCount > 0) {
        var data = []
        result.rows.map((item) => {
          ride.getMyJoinedRides(item.trip_id, (err, result1) => {
            if(err) {
              return res.status(500).send('Something broke!')
            }
            data = data.concat(result1.rows[0])
            result.rowCount--;
            if (result1.rowCount === 0) {
              res.json({
                msg: 'Get data successfully',
                info: data
              })
            }
          })
        })
      } else {
        res.json({
          msg: 'You are not joined to any ride',
          info: []
        })

      }
    })

  } else {
    res.json({
      msg: 'You should login before displaying your rides'
    })
  }
}
