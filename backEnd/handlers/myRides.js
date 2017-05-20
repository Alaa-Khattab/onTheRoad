const ride = require('../../database/ridesHelpers.js');
module.exports = function myRides(req, res) {
  if (req.session.userId) {
    const user_id = req.session.userId
    console.log('hereeeee',user_id);
    ride.getJoinedRides(user_id, (err, result) => {
      if (err) {
        return res.status(500).send('Something broke!')
      }
      console.log('result:',result.rows[0].trip_id);

      if (result.rowCount > 0) {

        ride.getMyJoinedRides(result.rows[0].trip_id,(err,result2)=>{
          console.log('result2.rows:',result2.rows);
          res.json({
                  msg: 'Get data successfully',
                  info: result2.rows
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
