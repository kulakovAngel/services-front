import React from 'react';
import { connect } from 'react-redux';

import { setPageTitle } from './../../helpers';

class PageHome extends React.Component {
  constructor(props) {
    super(props);
    setPageTitle('Home', this.props.dispatch);
  }
  
  render() {
    return (
      <div>Main Page</div>
    )
  }
}

const mapStateToProps = state => (
  { pageTitle: state.pageTitle }
)

export default connect(mapStateToProps)(PageHome);