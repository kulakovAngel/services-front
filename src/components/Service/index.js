import React from 'react';
import { Link } from 'react-router-dom';

import MakeOrder from './../MakeOrder';
import { IMG_URL } from './../../consts';

import classes from './style.module.css';


class Service extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOrderInProgress: false,
      pickedDate: null,
    }
  }
  
//  handleToogleShowCalendar() {
//    this.setState((prevState) => ({
//      isOrderInProgress: !prevState.isOrderInProgress,
//    }));
//  }
  
  render() {
    const { content, className } = this.props;
          
    return (
      <section key={ content.id } className={ className }>
        <Link to={`/services/${content.id}`}>
          <h2>{ content.title }</h2>
        </Link>
        <p>
            <img src={ `${IMG_URL}/${content.title}.jpg` } alt={content.title} title={content.title}/>
              { content.description.slice(0, 150) }...
        </p>
        <button onClick={ this.props.handleToogleShowCalendar }>Заказать</button>
        {
          this.props.isOrderInProgress && <MakeOrder serviceId={ content.id } handleToogleShow={ this.props.handleToogleShowCalendar }/>
        }
      </section>
    );
  }
}


export default Service;