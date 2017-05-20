const loc = require('../../database/locationHelpers.js');
module.exports = function locations(req,res) {
  console.log('llllll');
  loc.getLocations((err,result)=>{
    if(err){
      return res.status(500).send('Something broke!')
    }
    res.json(result.rows)
  })
}
