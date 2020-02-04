import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import NavLinks from './../NavLinks';
import Logotype from './../Logotype';

import classes from './style.module.css';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }
  
  handleLogOut(e) {
    e.preventDefault();
    this.props.dispatch({
      type: 'TRY_LOG_OUT',
    });
  }
  render() {
    console.log(this.props.auth);
    const { pageInfo, auth } = this.props;
    document.title = 'App - ' + pageInfo.title;
    return (
      <header className={ classes.header }>
        <NavLinks { ...auth } />
        <div>
          {
            auth.isAuthorized && <div>Hello, { auth.name }! <Link to='#' onClick={ this.handleLogOut }>(Log Out?)</Link></div>
          }
          <h1>{ pageInfo.title }</h1>
        </div>
        <Logotype />
      </header>
    );
  }
}

const mapStateToProps = state => ({
  pageInfo: state.pageTitle,
  auth: state.auth,
})

export default connect(mapStateToProps)(Header);
