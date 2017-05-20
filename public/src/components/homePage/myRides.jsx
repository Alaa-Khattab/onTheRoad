import React, { Component } from 'react';
import getTheRides from '../../actions/myRidesActions';
import MyRidesRow from './myRidesRow.jsx';
import { connect } from 'react-redux';
class MyRides extends Component{
  constructor(props){
    super(props);
  }
  componentWillMount(){
    {this.props.getMyRides()}
  }
  render(){
    return(
      <div>
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
            </tr>
          </thead>
          <MyRidesRow
            rides={this.props.myRides}
            />
        </table>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  console.log('myRides: ',store.myRides);
  return {
    myRides: store.myRides
  }
}

const mapDispatchToProps = () => {
  return {
    getMyRides  : () => {
      getTheRides()
    }
  }
}

const MyRidesCom = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyRides)
export default MyRidesCom;
