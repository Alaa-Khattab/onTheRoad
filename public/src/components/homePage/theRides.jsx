import React, { Component } from 'react';
import getTheRides  from '../../actions/getRidesActions';
import { connect } from 'react-redux';
import RidesRow from './theRidesRow.jsx';

class TheRides extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    {this.props.getRides()}
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
              <select name="from">
              <option disabled="disabled" selected="selected">From</option>
              <option value="1">Rafah</option>
            </select>
              <select name="to">
                <option disabled="disabled" selected="selected">To</option>
                <option value="2">Gaza</option>
              </select>
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
        <RidesRow rides={this.props.Rides} />
      </table>
      </div>
    );
  }
}
const mapStateToProps = (store) => {
  console.log('rides: ',store.rides);
  return { Rides: store.rides }
}

const mapDispatchToProps = () => {
  return {
    getRides  : () => {
      getTheRides()
    }
  }
}

const theRides = connect(
  mapStateToProps,
  mapDispatchToProps
)(TheRides)

export default theRides;
