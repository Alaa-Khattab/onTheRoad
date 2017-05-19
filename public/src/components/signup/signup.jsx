import React, { Component } from 'react';
import { connect } from 'react-redux';
import signupAction  from '../../actions/signupActions';

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      full_name: '',
      email: '',
      password: '',
      id_num: 0,
      gender: 0,
      phone: ''
    }
  }

  changeFullName(ev){
    this.setState({full_name: ev.target.value});
  }

  changeEmail(ev) {
    this.setState({email: ev.target.value});
  }

  changePassword(ev) {
    this.setState({password: ev.target.value});
  }

  changeIdNum(ev){
    this.setState({id_num: ev.target.value});
  }

  changeGender(ev){
    this.setState({gender: ev.target.value});
  }

  changePhone(ev){
    this.setState({phone: ev.target.value});
  }

  toggleShow() {
    this.refs.register.classList.toggle('show');
  }

  handleSubmit(event){
    event.preventDefault();
  }

  onSignup(){
    this.props.goSginup(this.state)
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
          <input
            type="text"
            name="full_name"
            value={this.state.full_name}
            placeholder="Full name"
            onChange={this.changeFullName.bind(this)}
            />
          <input
            type="email"
            name="email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.changeEmail.bind(this)}
            />
          <input
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.changePassword.bind(this)}
            />
          <input
            type="number"
            name="id_num"
            value={this.state.id_num}
            placeholder="Id Number"
            onChange={this.changeIdNum.bind(this)}
            />
          <input
            type="text"
            name="phone"
            value={this.state.phone}
            placeholder="Phone no."
            onChange={this.changePhone.bind(this)}
            />
          <div className="radio-wrp">
            <select
              value={this.state.gender}
              onChange={this.changeGender.bind(this)}
              >
              <option value = "" disabled>Gender</option>
              <option value = "0">Male</option>
              <option value = "1">Female</option>
            </select>
          </div>
          <div className="btn-wrp">
            <p className="error">{this.props.signup.msg}</p>
            <button
              type="button"
              onClick={this.onSignup.bind(this)}
            >
            Register
          </button>
          </div>
        </form>
      </div>
      </span>
    );
  }
}

const mapStateToProps = (store) => {
  console.log('signup: ',store.signup);
  return { signup: store.signup }
}

const mapDispatchToProps = () => {
  return {
    goSginup  : (data) => {
      signupAction(data)
    }
  }
}

const signUpcn = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)

export default signUpcn;
