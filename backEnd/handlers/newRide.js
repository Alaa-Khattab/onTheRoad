const ride = require('../../database/ridesHelpers.js');
module.exports = function newRide (req, res){
  if(req.session.userId){
  const data = Object.assign(req.body,{user_id:req.session.userId})
  ride.createRide(data,(err)=>{
    if(err){
      return res.status(500).send('Something broke!')
    }
    res.json({
      msg:'Ride was created successfully'
    })
  })
}
else {
  res.json({
    msg:'You should login before creating a ride',
    statusCode:401
  })
}
}
