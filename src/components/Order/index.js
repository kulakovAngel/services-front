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
    console.log(this.props);
    this.props.handleOrderDone(this.props.id);
  }
  
  render() {
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
        {
          +this.props.done ?
          <div>Completed</div>
          :
          <button
            className={ classes.buttonDone }
            onClick={ this.handleOrderDone }
            >
            &#9989;
          </button>
        }
      </>
    )
  }
}


export default Order;