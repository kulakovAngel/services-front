import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import DatePicker from './../DatePicker';
import PopUp from './../../layouts/PopUp';
import { IMG_URL } from './../../consts';

import classes from './style.module.css';


class Service extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOrderInProgress: this.props.auth.isAuthorized,
      pickedDate: null,
    }
    this.handleOrder = this.handleOrder.bind(this);
    this.handlePickDate = this.handlePickDate.bind(this);
    this.handleMakeOrder = this.handleMakeOrder.bind(this);
  }
  
  componentDidMount() {
    this.props.dispatch({
      type: 'TRY_GET_ORDERS',
    });
  }
  
  handleOrder(e) {
    this.setState({
      isOrderInProgress: true,
    });
  }
  
  handlePickDate(pickedDate) {
    this.setState({
      pickedDate
    });
  }
  
  handleMakeOrder() {
    this.props.dispatch({
      type: 'TRY_POST_ORDER',
      payload: {
        date: this.state.pickedDate,
        id_service: this.props.content.id,
        jwt: this.props.auth.jwt,
        name: this.props.auth.name,
      },
    });
  }
  
  render() {
    const { content, className, auth, orders } = this.props;
    console.log('orders:', orders.map(item => item.date));
    console.log(['2020-01-21','2020-01-24','2020-02-06'])
    
//    const order = auth.isAuthorized ?
//          <div style={{ position: 'fixed', top: '10px', backgroundColor: 'white', color: 'black', width: '60vw'}}>
//            <DatePicker />
//          </div>
//          :
//          <Redirect push to='auth' />;
    
    const order = (
      <div style={{ position: 'fixed', top: '10px', backgroundColor: 'white', color: 'black', width: '60vw'}}>
        <DatePicker
          disabled={ orders.map(item => item.date) }
          previousDisabled
        />
      </div>
    )
          
    return (
      <section key={ content.id } className={ className }>
        <PopUp>
          <DatePicker
            disabled={ orders.map(item => item.date) }
            previousDisabled
            onClick={ this.handlePickDate }
          />
          <input type='submit' value='Order!' className={ classes.orderButton } onClick={ this.handleMakeOrder } />
        </PopUp>
        <Link to={`/services/${content.id}`}>
          <h2>{ content.title }</h2>
        </Link>
        <p>
            <img src={ `${IMG_URL}/${content.title}.jpg` } alt={content.title} title={content.title}/>
              { content.description.slice(0, 150) }...
        </p>
        <button onClick={ this.handleOrder }>Заказать</button>
        {
          this.state.isOrderInProgress && order
        }
      </section>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  orders: state.orders,
});
export default connect(mapStateToProps)(Service);