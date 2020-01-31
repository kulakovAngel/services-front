import React from 'react';
import { connect } from 'react-redux';

import ServicesList from './../../components/ServicesList';
import Blob from './../../layouts/Blob';
import { setPageTitle } from './../../helpers';

import classes from './style.module.css';


class PageServices extends React.Component {
  constructor(props) {
    super(props);
    setPageTitle('Our Services', this.props.dispatch);
  }
  
  render() {
    return (
      <>
        <p>
          Proin a varius quam. Proin eget vestibulum mi, sed commodo augue. Nam molestie venenatis volutpat. Morbi iaculis eget leo nec ornare. Curabitur gravida libero mattis ligula lobortis gravida. Nulla feugiat lobortis est, vitae hendrerit erat lacinia et. Aenean id vehicula sapien. Nulla vitae malesuada odio, tempus porta lectus. Aliquam eu purus tincidunt, accumsan sem eu, placerat tellus. Cras lacinia rutrum vestibulum. Maecenas nec pellentesque purus.
        </p>
        <Blob
          top='55vh'
          left='20vw'
          size='300'
          z='-1'
          />
        <div className={ classes.listWrapper }>
          <ServicesList className={ classes.list } />
        </div>
      </>
    )
  }
}


const mapStateToProps = state => (
  { pageTitle: state.pageTitle }
);
export default connect(mapStateToProps)(PageServices);