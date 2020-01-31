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
    function isCurrentDate(orderDate) {
      const now = new Date();
      const currentDateArr = [now.getFullYear(), 1 + now.getMonth(), now.getDate()];
      const orderDateArr = orderDate.split('-').map(item => +item);
      for (let i=0; i<3; i++) {
        if (currentDateArr[i] !== orderDateArr[i]) return '';
      }
      return classes.currentDate;
    }
    return (
      <section className={ classes.orders }>
        <h3>
          <div>ID</div>
          <div>Date</div>
          <div>Service Title</div>
          <div>Consumer's Name</div>
          <div>Status</div>
        </h3>
        {
          this.props.orders.length ? (
            <ul>
              {
                this.props.orders.map(order => (
                  <li key={ order.id } className={ `${+(order.done) ? classes.orderDone : classes.orderNotDone} ${isCurrentDate(order.date)}` }>
                    <Order { ...order } handleOrderDone={ this.handleOrderDone } />
                  </li>
                ))
              }
            </ul>
          ) : 'There is nothing to view...'
        }
      </section>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  orders: state.orders,
});

export default connect(mapStateToProps)(OrdersList);