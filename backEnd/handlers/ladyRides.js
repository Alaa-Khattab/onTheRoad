const ride = require('../../database/ridesHelpers.js');
module.exports = function ladyRides (req, res){
  ride.getLadyRides((err,result)=>{
    if(err){
        res.status(500).send('Something broke!')
    }else{
      res.json({
        msg:'Get data successfully',
        statusCode:200,
        data : result.rows
      })
    }
  })
}
