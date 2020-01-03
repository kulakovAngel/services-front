import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import classes from './style.module.css';


class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
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
    const { login, password } = this.state;
    this.props.dispatch({
      type: 'TRY_LOG_IN',
      payload: {login, password}
    });
    this.setState({
      login: '',
      password: '',
    });
  }
  
  render() {
    const { login, password } = this.state;
    const { auth } = this.props;
    if (auth.name) {
      console.log(auth.name);
      window.history.back()
    }
    //window.history.back();
    return (
      //auth.name ? <Redirect to='/' /> :
      <form onSubmit={ this.handleSubmit } className={ classes.form }>
        <input type='text' name='login' placeholder='Login*' value={ login } onChange={this.handleChangeInput} required />
        <input type='password' name='password' placeholder='Password*' value={ password } onChange={this.handleChangeInput} required />
        <input type='submit' value='Log In' />
      </form>
    )
  }
}

const mapStateToProps = state => (
  { auth: state.auth }
)

export default connect(mapStateToProps)(LogIn);