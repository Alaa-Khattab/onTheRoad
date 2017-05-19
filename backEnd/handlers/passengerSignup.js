const user = require('../../database/userHelpers.js');
module.exports = function passengerSignup (req, res){
  user.createPassenger(req.body,(err)=>{
    if(err){
      res.json({
        msg:'User already registered',
        statusCode:401
      })
    }else{
      res.json({
        msg:'Registered successfully',
        statusCode:200
      })
    }
  })
}
