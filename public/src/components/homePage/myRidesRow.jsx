import React, { Component } from 'react';

const ridesRow = ({rides}) =>{
  if(!rides.data){
    return <div>loading...</div>
  }
  const theRides = rides.data.map((item) => {
    console.log('myRidesItem: ',item);
    return(
      <tr>
        <td><span>{item.full_name}</span></td>
        <td><span>{item.phone}</span></td>
        <td><span>{item.car_num}</span></td>
        <td><span>{item.date}</span></td>
        <td><span>{item.pick_up_point}</span></td>
        <td><span>{item.pick_up_time}</span></td>
        <td><span>{item.location_from}</span></td>
        <td><span>{item.location_to}</span></td>
        <td><span>{item.available_seats}</span></td>
        <td><span>{item.price}</span></td>
      </tr>
    );
  });
  return(
    <tbody>
      {theRides}
    </tbody>
  );
}

export default ridesRow;
