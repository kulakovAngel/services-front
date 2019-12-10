import React from 'react';
import { connect } from 'react-redux';

import NavBar from './../NavBar';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { pageInfo, auth } = this.props;
    document.title = 'App - ' + pageInfo.title;
    return (
      <header>
        <NavBar />
        { auth.name && <div>Hello, { auth.name }!</div> }
        <h1>{ pageInfo.title }</h1>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  pageInfo: state.pageTitle,
  auth: state.auth,
})

export default connect(mapStateToProps)(Header);
