const user = require('../../database/userHelpers.js');
 function login  (req, res)  {
   const {email,password} = req.body;
   user.getUserByEmailFromPassenger(email,password,(err,result1 )=>{
     user.getUserByEmailFromDriver (email,password,(error,result2)=>{
       if (result1.rows.lenght > 0 ){
         req.session.userId = result1.rows.user_id;
         res.send({
           msg:'Log in successfully',
           statusCode : 200
         })
       }else if(result2.rows.lenght > 0 ){
         req.session.userId = result2.rows.user_id;
         res.send({
           msg:'Log in successfully',
           statusCode : 200
         })
       }
       else{
         res.send({
           msg:'Email or Password is not correct',
           statusCode : 401
         })
       }
     })
   })
}
module.exports={
 login
}
