import React from 'react';
import { connect } from 'react-redux';

import { setPageTitle } from './../../helpers';

import classes from './style.module.css';


class PageSingleService extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'TRY_GET_SERVICE_BY_ID',
      payload: {
        id: this.props.match.params.id,
      }
    });
    setPageTitle(this.props.service.title, this.props.dispatch);
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.service.title !== this.props.service.title)
      setPageTitle(this.props.service.title, this.props.dispatch);
  }
  
  render() {
    const { service } = this.props;
    return (
      <>
        <p>
          {service.title}
        </p>
        <p>
          {service.description}
        </p>
      </>
    )
  }
}


const mapStateToProps = state => ({
  pageTitle: state.pageTitle,
  service: state.service,
});
export default connect(mapStateToProps)(PageSingleService);