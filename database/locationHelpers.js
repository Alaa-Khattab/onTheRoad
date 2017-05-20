const dbutils = require('./dbutils.js');
function getLocations (cb){
  const query = `SELECT * FROM location;`;
  dbutils.selectAll(query,cb)

}
module.exports = {
  getLocations
}
