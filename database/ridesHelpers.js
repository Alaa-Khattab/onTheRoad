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
    trip.trip_id,
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
    trip.trip_id,
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
function getUserIdByTripId(data,cb) {
  const query = `SELECT user_id,available_seats FROM trip WHERE trip_id=$1;`;
  dbutils.runQuery(query,[data],cb)

}
function getUserIdByTripIdFromUserTrip(data,cb) {
  const query = `SELECT user_id FROM usertrip WHERE trip_id=$1;`;
  dbutils.runQuery(query,[data],cb)

}
function joinedRide(data,cb) {
  const query = `INSERT INTO usertrip (user_id,trip_id) VALUES ($1,$2);`;
  dbutils.runQuery(query,[data.user_id,data.trip_id],cb)
}
function updateSeats(data,cb) {
  const query = `UPDATE trip SET available_seats=$1 WHERE trip_id=$2;`;
  dbutils.runQuery(query,[data.available_seats,data.trip_id],cb)
}
function getJoinedRides(data,cb) {
  const query = `SELECT trip_id FROM usertrip WHERE user_id=$1;`;
  dbutils.runQuery(query,[data],cb)
}
function getMyJoinedRides(data,cb) {
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
  FROM trip , drivers,location where trip.location_from_id=location.location_id AND trip_id=$1;`;
  dbutils.runQuery(query,[data],cb)
}
module.exports={
  getRides,
  getLadyRides,
  createRide,
  getUserIdByTripId,
  getUserIdByTripIdFromUserTrip,
  joinedRide,
  updateSeats,
  getJoinedRides,
  getMyJoinedRides
}
