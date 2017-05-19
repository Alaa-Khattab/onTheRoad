const location = `CREATE TABLE IF NOT EXISTS location (
  location_id serial PRIMARY KEY,
  location_name varchar(50)
);`;
const passengers = `CREATE TABLE IF NOT EXISTS passengers (
    user_id serial PRIMARY KEY ,
    full_name varchar(25),
    email varchar(100) UNIQUE,
    password varchar(255),
    id_num INT,
    phone varchar(15),
    gender INT
  );`;
  const drivers = `CREATE TABLE IF NOT EXISTS drivers (
    user_id serial PRIMARY KEY ,
    full_name varchar(25),
    email varchar(100) UNIQUE,
    password varchar(255),
    phone varchar(15),
    id_num INT,
    photo varchar(255),
    car_num varchar(15),
    drivers_license_num INT,
    gender INT
  );`;
  const trip = `CREATE TABLE IF NOT EXISTS trip (
    trip_id serial PRIMARY KEY,
    location_from_id INT references location(location_id),
    location_to_id INT references location(location_id),
    date varchar(30),
    pick_up_time varchar(30),
    pick_up_point varchar(50),
    user_id INT references drivers(user_id),
    available_seats INT,
    price INT
  );`;
  const usertrip = `CREATE TABLE IF NOT EXISTS usertrip (
  id serial PRIMARY KEY,
  user_id INT references passengers (user_id),
  trip_id INT references trip(trip_id)
);`;

module.exports = {
  passengers,
  trip,
  usertrip,
  location,
  drivers
}
