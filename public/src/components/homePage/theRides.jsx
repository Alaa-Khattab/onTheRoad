import React, { Component } from 'react';
import getTheRides  from '../../actions/getRidesActions';
import { connect } from 'react-redux';
import RidesRow from './theRidesRow.jsx';
import getLocations from '../../actions/getLocationsActions';
import joinRide from '../../actions/joinRideActions';
import SelectLocations from './SelectLocations.jsx';

class TheRides extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    {this.props.getRides()}
    {this.props.Locations()}
  }

  render(){
    return(
      <div>
      <div className="filter-wrp">
        <div className="row">
          <div className="left">
            <h2>Scheduled Rides</h2>
          </div>
          <div className="right">
            <form className="filter">
              <input type="date" name="date" />
                <SelectLocations
                  label='From'
                  options={this.props.locations}
                />
                <SelectLocations
                  label='To'
                  options={this.props.locations}
                />
              <button type="button" name="button">search</button>
            </form>
          </div>
        </div>
      </div>
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
        <RidesRow
          rides={this.props.Rides}
          joinRide={data => this.props.JoinRide(data)}
          />
      </table>
      <p className="error">{this.props.JoinRideMsg.msg}</p>
      </div>
    );
  }
}
const mapStateToProps = (store) => {
  console.log('rides: ',store.rides);
  return {
    locations: store.locations,
    Rides: store.rides,
    JoinRideMsg: store.joinRide
  }
}

const mapDispatchToProps = () => {
  return {
    getRides  : () => {
      getTheRides()
    },
    Locations: ()=>{
      getLocations();
    },
    JoinRide: (data) => {
      joinRide(data);
    }
  }
}

const theRides = connect(
  mapStateToProps,
  mapDispatchToProps
)(TheRides)

export default theRides;
