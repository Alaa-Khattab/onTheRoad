import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import LoginAction  from '../../actions/loginActions';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  toggleShow() {
    this.refs.login.classList.toggle('show'); 
  }

  changeEmail(ev) {
    this.setState({email: ev.target.value});
  }

  changePassword(ev) {
    this.setState({password: ev.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
  }

  goLogin(){
    this.props.sginin(this.state)
    this.setState({email: '', password: ''})
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
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.changeEmail.bind(this)}
              placeholder="Email" />
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.changePassword.bind(this)}
              placeholder="Password" />
            <div className="btn-wrp">
              <button
                type="button"
                action="submit"
                onClick={this.goLogin.bind(this)}
                >
                Log In
              </button>
            </div>
          </form>
        </div>
      </span>
    );
  }
}

const mapStateToProps = (store) => {
  console.log('signin: ',store.signin);
  return { signin: store.signin }
}

const mapDispatchToProps = () => {
  return {
    sginin  : (data) => {
      LoginAction(data)
    }
  }
}

const sginincn = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default sginincn;
