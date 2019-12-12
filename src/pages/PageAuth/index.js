import React from 'react';
import { connect } from 'react-redux';

import Tabs from './../../layouts/Tabs';
import LogIn from './../../components/LogIn';
import SignIn from './../../components/SignIn';
import { setPageTitle } from './../../helpers';

import classes from './style.module.css';


class PageAuth extends React.Component {
  constructor(props) {
    super(props);
    setPageTitle('Authorization', this.props.dispatch);
  }
  
  render() {
    return (
      <Tabs className={ classes.tabs }>
        {{ title: 'LogIn', content: <LogIn /> }}
        {{ title: 'SignIn', content: <SignIn /> }}
      </Tabs>
    )
  }
}

const mapStateToProps = state => (
  { pageTitle: state.pageTitle }
)

export default connect(mapStateToProps)(PageAuth);