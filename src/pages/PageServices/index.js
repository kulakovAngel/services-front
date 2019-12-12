import React from 'react';
import { connect } from 'react-redux';

import { setPageTitle } from './../../helpers';

import classes from './style.module.css';


class PageServices extends React.Component {
  constructor(props) {
    super(props);
    setPageTitle('Services', this.props.dispatch);
  }
  
  render() {
    return (
      'PageServices'
    )
  }
}

const mapStateToProps = state => (
  { pageTitle: state.pageTitle }
)

export default connect(mapStateToProps)(PageServices);