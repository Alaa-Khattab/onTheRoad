import React, { Component } from 'react';
import  createRide  from '../../actions/newRideActions.js';
import { connect } from 'react-redux';
import getLocations from '../../actions/getLocationsActions';
import SelectLocations from './SelectLocations.jsx';

var type='';
var message ='';
var green = '#4ad86a';

class NewRide extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      date: '',
      time: '',
      location_from_id: '',
      location_to_id: '',
      pick_up_point:'',
      pick_up_time:'',
      available_seats: 0,
      price: 0
    };
  }

  componentWillMount(){
    {this.props.Locations()}
  }

  changeRideDate(ev) {
    this.setState({date: ev.target.value});
  }

  changeTime(ev) {
    this.setState({time: ev.target.value});
  }

  changeLocationFrom(ev) {
    this.setState({location_from_id: ev.target.value});
  }

  changeLocationTo(ev) {
    this.setState({location_to_id: ev.target.value});
  }

  changePassingBy(ev) {
    this.setState({pick_up_point: ev.target.value});
  }

  changePassingPointTime(ev) {
    this.setState({pick_up_time: ev.target.value});
  }

  changeSeatsAvailable(ev) {
    this.setState({available_seats: ev.target.value});
  }

  changePrice(ev) {
    this.setState({price: ev.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
  }

  clickCreateRide(){
    message ='';
    type = 'spinningBubbles';
    this.props.RidesCreation(this.state)
    this.setState(
      {
        date: '',
        time: '',
        location_from_id: '',
        location_to_id: '',
        pick_up_point:'',
        pick_up_time:'',
        available_seats: 0,
        price: 0
      }
    )
  }

  render() {
    if(this.props.createRide.statusCode === 200){
      message=  'Your Ride Created Successfully';
      type='';
    }
    else if (this.props.createRide.statusCode === 409){
      message = 'You already Created trip before in this time ';
      type='';

    }else if (this.props.createRide.statusCode === 400){
      message = 'Invalid inputs'
      type='';

    }
    return (
        <section className='trip-create'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-offset-1 col-md-10'>
                <h3 className='heading'>New Ride</h3>
                <span className='caption'>Insert Info about your new trip</span>
                <form className='form' onSubmit={this.handleSubmit.bind(this)}>
                  <div className='form-group'>
                    <label>Ride date</label>
                    <input
                      type='date'
                      value={this.state.date}
                      className='form-control'
                      onChange={this.changeRideDate.bind(this)}
                      />
                  </div>
                  <div className='form-group'>
                    <label>Time</label>
                    <input
                      type='time'
                      value={this.state.time}
                      className='form-control'
                      onChange={this.changeTime.bind(this)}
                      />
                  </div>
                  <div className='form-group'>
                    <label>From</label>
                    <SelectLocations
                      label='From'
                      options={this.props.locations}
                      value={this.state.location_from_id}
                      change={this.changeLocationFrom.bind(this)}
                    />
                  </div>
                  <div className='form-group'>
                    <label>To</label>
                    <SelectLocations
                      label='To'
                      options={this.props.locations}
                      value={this.state.location_to_id}
                      change={this.changeLocationTo.bind(this)}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Pickup point</label>
                    <input
                      type='text'
                      value={this.state.pick_up_point}
                      className='form-control'
                      onChange={this.changePassingBy.bind(this)}
                      />
                  </div>
                  <div className='form-group'>
                    <label>Pickup Time</label>
                    <input
                      type='time'
                      value={this.state.pick_up_time}
                      className='form-control'
                      onChange={this.changePassingPointTime.bind(this)}
                      />
                  </div>
                  <div className='form-group'>
                    <label>Seats available</label>
                    <input
                      type='number'
                      className='form-control'
                      value={this.state.available_seats}
                      className='form-control'
                      onChange={this.changeSeatsAvailable.bind(this)}
                      />
                  </div>
                  <div className='form-group'>
                    <label>Price</label>
                    <input
                      type='number'
                      className='form-control'
                      value={this.state.price}
                      className='form-control'
                      onChange={this.changePrice.bind(this)}
                      />
                  </div>
                  <div className='btn-wrp-right'>
                    <p className='error'>{this.props.createRide.msg}</p>
                    <button
                      type='submit'
                      className='btn btn-success'
                      onClick={this.clickCreateRide.bind(this)}
                      >
                      Add this trip
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </section>
    );
  }
}

const mapStateToProps = (store) => {
  console.log('store.createRide: ',store.createRide);
  return {
    locations: store.locations,
    createRide: store.createRide
  }
}
const mapDispatchToProps = () => {
  return {
    RidesCreation  : (data) => {
      createRide(data)
    },
    Locations: ()=>{
      getLocations();
    }
  }
}

const RidesCreation = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewRide)
export default RidesCreation;
