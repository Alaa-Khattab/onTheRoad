const ride = require('../../database/ridesHelpers.js');
module.exports = function newRide (req, res){
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
