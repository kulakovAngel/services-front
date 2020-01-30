import React from 'react';
import { connect } from 'react-redux';

import Order from './../Order';

import classes from './style.module.css';


class OrdersList extends React.Component {
  constructor(props) {
    super(props);
    this.handleOrderDone = this.handleOrderDone.bind(this);
  }
  
  handleOrderDone(id) {
    this.props.dispatch({
      type: 'TRY_PUT_ORDER_DONE',
      payload: {
        id,
        jwt: this.props.auth.jwt,
      }
    });
  }
  
  render() {
    return (
      <section className={ classes.orders }>
        <h3>
          <div>ID</div>
          <div>Date</div>
          <div>Service Title</div>
          <div>Consumer's Name</div>
          <div>Status</div>
        </h3>
        <ul>
          {
            this.props.orders.map(order => (
              <li key={ order.id } className={ Number (order.done) ? classes.orderNotDone : classes.orderDone }>
                <Order { ...order } handleOrderDone={ this.handleOrderDone } />
              </li>
            ))
          }
        </ul>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  orders: state.orders,
});

export default connect(mapStateToProps)(OrdersList);