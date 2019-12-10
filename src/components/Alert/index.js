import React from 'react';
import { connect } from 'react-redux';

import classes from './style.module.css';


class Alert extends React.Component {
  render() {
    const { alert } = this.props;
    console.log('alert:');
    console.log(alert);
    return (
      <div className={ alert.type === 'error' ? classes.danger : classes.success }>
        <section>
          <h5>{ alert.type }</h5>
          <p>{ alert.message }</p>
        </section>
        <span className={classes.closeButton}>&times;</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  alert: state.alert,
})

export default connect(mapStateToProps)(Alert);
