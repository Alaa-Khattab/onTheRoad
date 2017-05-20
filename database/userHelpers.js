const dbutils = require('./dbutils.js');

function getUserByEmailFromPassenger(email, password, cb) {
  const query = `SELECT
  user_id
  FROM passengers
  WHERE email=$1 AND password=$2`;
  dbutils.runQuery(query, [email, password], cb)
}

function getUserByEmailFromDriver(email, password, cb) {
  const query = `SELECT
  user_id
  FROM drivers
  WHERE email=$1 AND password=$2`;
  dbutils.runQuery(query, [email, password], cb)
}

function createPassenger(data, cb) {
  const query = `INSERT INTO passengers (full_name,
    email,
    password,
    id_num,
    gender,
    phone) values($1,$2,$3,$4,$5,$6);`;
    dbutils.runQuery(query, [data.full_name,
      data.email,
      data.password,
      data.id_num,
      data.gender,
      data.phone], cb)
}
function createDriver(data, cb) {
  const query = `INSERT INTO drivers (full_name,
    email,
    password,
    id_num,
    gender,
    phone,
    car_num,
    drivers_license_num
  ) values($1,$2,$3,$4,$5,$6,$7,$8);`;
    dbutils.runQuery(query, [data.full_name,
      data.email,
      data.password,
      data.id_num,
      data.gender,
      data.phone,
      data.car_num,
      data.drivers_license_num], cb)
}
function getGenderDriver(data,cb) {
  console.log('data in get gender:',data);
  const query = `SELECT gender FROM drivers WHERE user_id=$1;`;
  dbutils.runQuery(query,[data],cb)
}
function getGenderPassenger(data,cb) {
  console.log('data in :',data);
  const query = `SELECT gender FROM passengers WHERE user_id=$1;`;
  dbutils.runQuery(query,[data],cb)
}
module.exports = {
  getUserByEmailFromPassenger,
  getUserByEmailFromDriver,
  createPassenger,
  getGenderDriver,
  createDriver,
  getGenderPassenger
}
