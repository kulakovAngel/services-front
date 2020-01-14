import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import DatePicker from './../DatePicker';
import { IMG_URL } from './../../consts';
//import classes from './style.module.css';


class Service extends React.Component {
  constructor(props) {
    super(props);
    this.handleOrder = this.handleOrder.bind(this);
    this.state = {
      isOrderInProgress: this.props.auth.isAuthorized,
    }
  }
  
  handleOrder(e) {
    this.setState({
      isOrderInProgress: true,
    });
    fetch('http://new.services/api/orders/').then(res => res.json() )
    .then( data => {
      console.log(data);
  });
  }
  
  render() {
    const { content, className, auth } = this.props;
    console.log(auth);
    
//    const order = auth.isAuthorized ?
//          <div style={{ position: 'fixed', top: '10px', backgroundColor: 'white', color: 'black', width: '60vw'}}>
//            <DatePicker />
//          </div>
//          :
//          <Redirect push to='auth' />;
    
    const order = (
      <div style={{ position: 'fixed', top: '10px', backgroundColor: 'white', color: 'black', width: '60vw'}}>
        <DatePicker
          disabled={ ['2020-01-21','2020-01-24','2020-02-06'] }
          previousDisabled/>
      </div>
    )
          
    return (
      <section key={content.id} className={ className }>
        {order}
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
});
export default connect(mapStateToProps)(Service);