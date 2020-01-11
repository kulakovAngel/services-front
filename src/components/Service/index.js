import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { IMG_URL } from './../../consts';
//import classes from './style.module.css';


class Service extends React.Component {
  constructor(props) {
    super(props);
    this.handleOrder = this.handleOrder.bind(this);
    this.state = {
      isOrderInProgress: this.props.auth.name ? true : false,
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
    
    const order = auth.name ? <div>ORDER CONTAINER</div> : <Redirect push to='auth' />;
    
    return (
      <section key={content.id} className={ className }>
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