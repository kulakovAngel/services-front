import React from 'react';
import { connect } from 'react-redux';

import { setPageTitle } from './../../helpers';


class PageNotFound extends React.Component {
  constructor(props) {
    super(props);
    setPageTitle('Not Found', this.props.dispatch);
  }
  
  render() {
    return (
      <>
      <p>This page is not found (404)!</p>
      <p>How did You get here???!</p>
      </>
    );
  };
  
}

const mapStateToProps = state => (
  { pageTitle: state.pageTitle }
)

export default connect(mapStateToProps)(PageNotFound);
