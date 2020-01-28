import React from 'react';
import { connect } from 'react-redux';

import OrdersList from './../../components/OrdersList';
import { setPageTitle } from './../../helpers';

import classes from './style.module.css';


class PageAdmin extends React.Component {
  constructor(props) {
    super(props);
    setPageTitle('Admin Page', this.props.dispatch);
  }
  
  componentDidMount() {
    this.props.dispatch({
      type: 'TRY_GET_ORDERS',
    });
  }
  
  render() {
    return (
      <OrdersList orders={ this.props.orders } />
    )
  }
}

const mapStateToProps = state => ({
  orders: state.orders,
  pageTitle: state.pageTitle,
});

export default connect(mapStateToProps)(PageAdmin);