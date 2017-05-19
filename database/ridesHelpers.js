const dbutils = require('./dbutils.js');

function getRides(cb){
  const query = `SELECT drivers.full_name,
    drivers.phone,
    drivers.car_num,
    drivers.gender,
    trip.date,
    trip.pick_up_time,
    trip.pick_up_point,
    trip.available_seats,
    trip.price,
    location.location_name as location_from ,
    (select location_name from location where
 location_id=trip.location_to_id) as location_to
 FROM trip , drivers,location where trip.location_from_id=location.location_id;`;
  dbutils.selectAll(query,cb)


}
function getLadyRides(cb){
  const query = `SELECT drivers.full_name,
    drivers.phone,
    drivers.car_num,
    drivers.gender,
    trip.date,
    trip.pick_up_time,
    trip.pick_up_point,
    trip.available_seats,
    trip.price,
    location.location_name as location_from ,
    (select location_name from location where
 location_id=trip.location_to_id) as location_to
 FROM trip , drivers,location where trip.location_from_id=location.location_id AND gender=0;`;
  dbutils.selectAll(query,cb)


}
module.exports={
  getRides,
  getLadyRides
}
