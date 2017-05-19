import React, { Component } from 'react';
import TheRides from './theRides.jsx';
import MyRides from './myRides.jsx';
import NewRide from './newRide.jsx';
import LadysRides from './ladysRides.jsx';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRides: true,
      myRides: false,
      newRide: false,
      ladysRides: false
    };
    this._showRides = this._showRides.bind(this);
    this._myRides = this._myRides.bind(this);
    this._newRide = this._newRide.bind(this);
    this._ladysRides = this._ladysRides.bind(this);
  }
  _showRides() {
    this.setState({
      showRides: true,
      myRides: false,
      newRide: false,
      ladysRides: false
    })
  }

  _myRides() {
    this.setState({
      showRides: false,
      myRides: true,
      newRide: false,
      ladysRides: false
    })
  }
  _newRide() {
    this.setState({
      showRides: false,
      myRides: false,
      newRide: true,
      ladysRides: false
    })
  }
  _ladysRides() {
    this.setState({
      showRides: false,
      myRides: false,
      newRide: false,
      ladysRides: true
    })
  }
    render(){
      return (
        <div>
          <aside className="sidebar">
            <button type="button" onClick={this._showRides}>Rides</button>
            <button type="button" onClick={this._myRides}>My rides</button>
            <button type="button" onClick={this._newRide}>Create ride</button>
            <button type="button" onClick={this._ladysRides}>Ladys only</button>
          </aside>
          <div id="content">
            {this.state.showRides ? <TheRides /> : null}
            {this.state.myRides ? <MyRides /> : null}
            {this.state.newRide ? <NewRide /> : null}
            {this.state.ladysRides ? <LadysRides /> : null}
          </div>
        </div>
      );
    }
}

export default HomePage;
