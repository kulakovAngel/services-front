import React from 'react';
import { connect } from 'react-redux';

import Auth from './../../components/Auth';
import { setPageTitle } from './../../helpers';


class PageAuth extends React.Component {
  constructor(props) {
    super(props);
    setPageTitle('Authorization', this.props.dispatch);
  }
  
  render() {
    return (
      <Auth />
    )
  }
}

const mapStateToProps = state => (
  { pageTitle: state.pageTitle }
)

export default connect(mapStateToProps)(PageAuth);