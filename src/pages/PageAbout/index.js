import React from 'react';
import { connect } from 'react-redux';

import { setPageTitle } from './../../helpers';


class PageAbout extends React.Component {
  constructor(props) {
    super(props);
    setPageTitle('About Us', this.props.dispatch);
  }
  
  render() {
    return (
      <div>About Page</div>
    );
  };
  
}

const mapStateToProps = state => (
  { pageTitle: state.pageTitle }
)

export default connect(mapStateToProps)(PageAbout);
