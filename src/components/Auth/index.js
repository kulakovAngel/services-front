import React from 'react';
import { connect } from 'react-redux';

import { setPageTitle } from './../../helpers';

import classes from './style.module.css';


class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeLoginField = this.changeLoginField.bind(this);
    this.changePassField = this.changePassField.bind(this);
  }
  
  changeLoginField(e) {
    this.setState({login: e.target.value});
  }
  
  changePassField(e) {
    this.setState({password: e.target.value});
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const { login, password } = this.state;
    this.props.dispatch({
      type: 'TRY_LOG_IN',
      payload: {login, password}
    });
  }
  
  render() {
    const { login, password } = this.state;
    return (
      <form onSubmit={ this.handleSubmit } className={ classes.form }>
        <input type='text' placeholder='login' value={ login } onChange={this.changeLoginField} />
        <input type='text' placeholder='password' value={ password } onChange={this.changePassField} />
        <input type='submit' value='Log In' />
      </form>
    )
  }
}

const mapStateToProps = state => (
  { auth: state.auth }
)

export default connect(mapStateToProps)(Auth);