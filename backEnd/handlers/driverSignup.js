const user = require('../../database/userHelpers.js');
module.exports = function driverSignup (req, res){
  user.createDriver(req.body,(err)=>{
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
