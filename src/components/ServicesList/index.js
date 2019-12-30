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
    window.addEventListener('resize', this.getScreenWidth);
  }
  
  componentDidMount() {
    this.props.dispatch({
      type: 'TRY_GET_SERVICES',
    });
  }
  
  getScreenWidth() {
    this.setState({screenWidth: document.documentElement.clientWidth})
  }
  
  render() {
    const { services, className: css } = this.props;
    const { screenWidth } = this.state;
    
    const servicesArr = services.map((service) => (
      <Service content={ service } className={ classes.service } key={ service.id }/>
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
});
export default connect(mapStateToProps)(ServicesList);