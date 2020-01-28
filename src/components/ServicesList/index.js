import React from 'react';
import { connect } from 'react-redux';

import Slider from './../../layouts/Slider';
import Service from './../Service';



import classes from './style.module.css';


class ServicesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: document.documentElement.clientWidth,
    }
    this.getScreenWidth = this.getScreenWidth.bind(this);
    this.handleToogleShowCalendar = this.handleToogleShowCalendar.bind(this);
  }
  
  componentDidMount() {
    window.addEventListener('resize', this.getScreenWidth);
    this.props.dispatch({
      type: 'TRY_GET_SERVICES',
    });
  }
  
  getScreenWidth() {
    this.setState({screenWidth: document.documentElement.clientWidth})
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.getScreenWidth);
  }
  
  handleToogleShowCalendar() {
    this.props.dispatch({
      type: 'TOOGLE_SHOW_CALENDAR',
      payload: {
        isOrderInProgress: !this.props.userDatePickerState.isOrderInProgress,
      }
    });
  }
  
  render() {
    const { services, className: css, userDatePickerState } = this.props;
    const { screenWidth } = this.state;
    const servicesArr = services.map((service) => (
      <Service
        content={ service }
        className={ classes.service }
        key={ service.id }
        isOrderInProgress={ userDatePickerState.isOrderInProgress }
        handleToogleShowCalendar={ this.handleToogleShowCalendar }
        />
    ));
    
    const servisesView = screenWidth > 1024 ? (
      <Slider className={ classes.slider + ' ' + css }>
        { servicesArr }
      </Slider>
    ) : servicesArr;
    
    return servisesView;
  }
}

const mapStateToProps = state => ({
  services: state.services,
  userDatePickerState: state.userDatePickerState,
});
export default connect(mapStateToProps)(ServicesList);