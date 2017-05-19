import React, { Component } from 'react';

const MyRides = () => {
  return(
    <table>
      <thead>
        <tr>
          <th>Trip date</th>
          <th>Time</th>
          <th>From</th>
          <th>To</th>
          <th>Pick up point</th>
          <th>Pick up time</th>
          <th>Seats avialable</th>
          <th>Organization</th>
          <th>Join trip</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span>16/06/2015</span></td>
          <td><span>8:00</span></td>
          <td><span>Jerusalem</span></td>
          <td><span>Erez</span></td>
          <td><span>Remal</span></td>
          <td><span>14:30</span></td>
          <td><span>3</span></td>
          <td><span>Mercy Corps</span></td>
          <td><span><button type="button">Join trip</button></span></td>
        </tr>
      </tbody>
    </table>
  );
}

export default MyRides;
