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
    const {
      id,
      date,
      title,
      name,
      done,
    } = this.props;
    return (
      <>
        <div>{ id }</div>
        <div>{ date }</div>
        <div>{ title }</div>
        <div>{ name }</div>
        {
          +done ? <div>Completed</div> :
          <button
            className={ classes.buttonDone }
            onClick={ this.handleOrderDone }
            >
            &#128504;
          </button>
        }
      </>
    )
  }
}


export default Order;