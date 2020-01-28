import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import DatePicker from './../DatePicker';
import PopUp from './../../layouts/PopUp';

import classes from './style.module.css';


class MakeOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickedDate: null,
      redirect: false,
    }
    this.handlePickDate = this.handlePickDate.bind(this);
    this.handleMakeOrder = this.handleMakeOrder.bind(this);
  }
  
  componentDidMount() {
    this.props.dispatch({
      type: 'TRY_GET_ORDERS',
    });
  }
  
  handlePickDate(pickedDate) {
    this.setState({
      pickedDate
    });
  }
  
  handleMakeOrder() {
    if (!this.props.auth.isAuthorized) {
      this.setState({ redirect: true });
      return;
    }
    this.props.dispatch({
      type: 'TRY_POST_ORDER',
      payload: {
        date: this.state.pickedDate,
        id_service: this.props.serviceId,
        jwt: this.props.auth.jwt,
        name: this.props.auth.name,
      },
    });
    this.props.handleToogleShow();
  }
  
  render() {
    const { className, orders } = this.props;  
    return (
      <PopUp>
        <DatePicker
          disabled={ orders.map(item => item.date) }
          previousDisabled
          onClick={ this.handlePickDate }
        />
        <div className={ classes.buttons }>
          <input type='submit' value='Order!' className={ classes.okButton } onClick={ this.handleMakeOrder } />
          <input type='reset' value='Cancell!' className={ classes.cancellButton } onClick={ this.props.handleToogleShow } />
        </div>
        { this.state.redirect && <Redirect push to="/auth" /> }
      </PopUp>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  orders: state.orders,
});
export default connect(mapStateToProps)(MakeOrder);