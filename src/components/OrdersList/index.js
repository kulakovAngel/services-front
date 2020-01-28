import React from 'react';
import { connect } from 'react-redux';

import Order from './../Order';

import classes from './style.module.css';


class OrdersList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <ul className={ classes.orders }>
        {
          this.props.orders.map(order => (
            <li className={ Number (order.done) ? classes.orderNotDone : classes.orderDone }>
              <Order { ...order } />
            </li>
          ))
        }
      </ul>
    )
  }
}


export default OrdersList;