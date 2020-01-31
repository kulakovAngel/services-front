import React from 'react';
import { connect } from 'react-redux';

import NavLinks from './../NavLinks';
import Logotype from './../Logotype';

import classes from './style.module.css';


class Header extends React.Component {
  render() {
    const { pageInfo, auth } = this.props;
    document.title = 'App - ' + pageInfo.title;
    return (
      <header className={ classes.header }>
        <NavLinks />
          <div>
            { auth.name && <div>Hello, { auth.name }!</div> }
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
