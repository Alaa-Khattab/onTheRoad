import React, { Component } from 'react';

class Register extends Component {
  constructor(props){
    super(props);
  }
  toggleShow() {
    this.refs.register.classList.toggle('show');
  }
  handleSubmit(event){
    event.preventDefault();
  }
  render(){
    const style = {
      display: 'none'
    };
    return(
      <span>
        <button type="button" id="signup" onClick={this.toggleShow.bind(this)}>Sign Up</button>
        <div className="module-wrp" ref="register" style={style} >
          <div className="overlay" onClick={this.toggleShow.bind(this)}></div>
        <form className="rigester module" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="full_name" value="" placeholder="Full name" />
          <input type="email" name="email" value="" placeholder="Email" />
          <input type="password" name="password" value="" placeholder="Password" />
          <input type="text" name="phone" value="" placeholder="Phone no." />
          <div className="radio-wrp">
            <label>
              Male
              <input type="radio" name="gender" value="0" />
            </label>
            <label>
              Female
              <input type="radio" name="gender" value="1" />
            </label>
          </div>
          <div className="btn-wrp">
            <button type="button">Register</button>
          </div>
        </form>
      </div>
      </span>
    );
  }
}

export default Register;
