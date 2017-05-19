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
function createRide (data,cb){
  const query = `INSERT INTO trip (location_from_id,
    location_to_id,
    date,
    pick_up_point,
    pick_up_time,
    available_seats,
    price,
    user_id) values ($1,$2,$3,$4,$5,$6,$7,$8);`;
  dbutils.runQuery(query,[
    data.location_from_id,
    data.location_to_id,
    data.date,
    data.pick_up_time,
    data.pick_up_point,
    data.available_seats,
    data.price,
    data.user_id
  ],cb);
}
module.exports={
  getRides,
  getLadyRides,
  createRide
}
