const user = require('../../database/userHelpers.js');
module.exports = function login  (req, res)  {
   const {email,password} = req.body;
   user.getUserByEmailFromPassenger(email,password,(err,result1 )=>{
     if (err) {
       return res.status(500).send('Something broke!')
     }
     user.getUserByEmailFromDriver (email,password,(error,result2)=>{
       if (error) {
         return res.status(500).send('Something broke!')
       }
       if (result1.rowCount > 0 ){
         req.session.userId = result1.rows[0].user_id;
         res.json({
           msg:'Log in successfully',
           statusCode : 200
         })
       }else if(result2.rowCount > 0 ){
         req.session.userId = result2.rows[0].user_id;
         res.json({
           msg:'Log in successfully',
           statusCode : 200
         })
       }
       else{
         res.json({
           msg:'Email or Password is not correct',
           statusCode : 401
         })
       }
     })
   })
}
