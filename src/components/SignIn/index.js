import React from 'react';
import { connect } from 'react-redux';

import { setPageTitle } from './../../helpers';

import classes from './style.module.css';


class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      login: '',
      password: '',
      passwordConfirm: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }
  
  handleChangeInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const {name,
           login,
           password,
           passwordConfirm} = this.state;
    if (password === passwordConfirm) {
      this.props.dispatch({
        type: 'TRY_SIGN_IN',
        payload: {name, login, password},
      });
      this.setState({
        name: '',
        login: '',
        password: '',
        passwordConfirm: '',
      });
    } else {
      this.props.dispatch({
        type: 'SIGN_IN_ERROR',
        message: 'Passwords are not matched!',
      });
      this.setState({
        password: '',
        passwordConfirm: '',
      });
    }
  }
  
  render() {
    const {name,
           login,
           password,
           passwordConfirm} = this.state;
    return (
      <form onSubmit={ this.handleSubmit } className={ classes.form }>
        <input type='text' name='name' placeholder='Name*' value={ name } onChange={this.handleChangeInput} required />
        <input type='text' name='login' placeholder='Login*' value={ login } onChange={this.handleChangeInput} required />
        <input type='password' name='password' placeholder='Password*' value={ password } onChange={this.handleChangeInput} required />
        <input type='password' name='passwordConfirm' placeholder='Confirm You password*' value={ passwordConfirm } onChange={this.handleChangeInput} required />
        <input type='submit' value='Sign In' />
      </form>
    )
  }
}

const mapStateToProps = state => (
  { auth: state.auth }
)

export default connect(mapStateToProps)(SignIn);