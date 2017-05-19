import React, {Component} from 'react';
import Login from '../login/login.jsx';
import Register from '../signup/signup.jsx';

class Header extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <header>
          <div className="left">
          </div>
          <div className="right">
            <Login />
            <Register />
          </div>
        </header>


      </div>
    );
  }
}

export default Header;
