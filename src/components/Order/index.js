import React from 'react';
import { connect } from 'react-redux';

import Tabs from './../../layouts/Tabs';
import LogIn from './../../components/LogIn';
import SignIn from './../../components/SignIn';
import { setPageTitle } from './../../helpers';

import classes from './style.module.css';


class Order extends React.Component {
  constructor(props) {
    super(props);
    this.handleOrderDone = this.handleOrderDone.bind(this);
  }
  
  
  handleOrderDone() {
    this.props.dispatch({
      type: 'TRY_PUT_DONE_ORDER',
    });
  }
  
  render() {
    console.log(typeof this.props.done);
    const button = Number (this.props.done) ?
          <div>Completed</div>
          :
          <button style={{ color: 'green' }} onClick={ this.handleOrderDone }>
            V
          </button>
    return (
      <>
        <div>
          { this.props.id }
        </div>
        <div>
          { this.props.date }
        </div>
        <div>
          { this.props.title }
        </div>
        <div>
          { this.props.name }
        </div>
        { button }
      </>
    )
  }
}


export default Order;