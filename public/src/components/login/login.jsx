import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Login extends Component {
  constructor(props){
    super(props);
  }
  toggleShow() {
    this.refs.login.classList.toggle('show');
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
        <button type="button" id="signin" onClick={this.toggleShow.bind(this)}>Sign In</button>
        <div className="module-wrp" ref="login" style={style}>
          <div className="overlay" onClick={this.toggleShow.bind(this)}></div>
          <form className="login module" onSubmit={this.handleSubmit.bind(this)}>
            <input type="email" name="email" value="" placeholder="Email" />
            <input type="password" name="password" value="" placeholder="Password" />
            <div className="btn-wrp">
              <button type="button">Log In</button>
            </div>
          </form>
        </div>
      </span>
    );
  }
}

export default Login;
