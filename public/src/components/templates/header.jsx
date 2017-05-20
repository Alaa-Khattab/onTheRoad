import React, {Component} from 'react';
import Login from '../login/login.jsx';
import Register from '../signup/signup.jsx';
import RegisterDriver from '../signup/signupDriver.jsx';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  toggleShow() {
    this.refs.headRegister.classList.toggle('show');
  }

  render() {
    const style = {
      display: 'none'
    };
    return (
      <div>
        <header>
          <div className="left">
          </div>
          <div className="right">
            <Login />
            <button
              onClick={this.toggleShow.bind(this)}
              >
              sign up
            </button>

            <div className="module-wrp" ref="headRegister" style={style} >
              <div className="overlay">
                <div className="regist-wrp">
                  <div className="close">
                    <span onClick={this.toggleShow.bind(this)}>X</span>
                  </div>
                    <div className="left">
                      <Register />
                    </div>
                    <div className="left">
                      <RegisterDriver />
                    </div>
                </div>
              </div>
            </div>
          </div>

        </header>


      </div>
    );
  }
}

export default Header;
