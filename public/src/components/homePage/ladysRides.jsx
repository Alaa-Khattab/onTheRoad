import React, { Component } from 'react';
import  ladyRide  from '../../actions/ladyRidesActions.js';
import { connect } from 'react-redux';
import LadyRidesRow from './ladiesRidesRow.jsx';
import joinRide from '../../actions/joinRideActions';

class LadysRides extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    {this.props.getLadyRides()}
  }
  render(){
    return(
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Phone no.</th>
            <th>Car no.</th>
            <th>Date</th>
            <th>Pick up time</th>
            <th>Pick up point</th>
            <th>From</th>
            <th>To</th>
            <th>Seats avialable</th>
            <th>price</th>
            <th>Join trip</th>
          </tr>
        </thead>
        <LadyRidesRow
          rides={this.props.ladyRides}
          joinRide={data => this.props.JoinRide(data)}
          />
      </table>
    );
  }
}

const mapStateToProps = (store) => {
  console.log('store.ladyRides: ',store.ladyRides);
  return {
    ladyRides: store.ladyRides,
    JoinRideMsg: store.joinRide
  }
}

const mapDispatchToProps = () => {
  return {
    getLadyRides  : () => {
      ladyRide()
    },
    JoinRide: (data) => {
      joinRide(data);
    }
  }
}

const GetLadyRides = connect(
  mapStateToProps,
  mapDispatchToProps
)(LadysRides)

export default GetLadyRides;
