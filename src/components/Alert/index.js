import React from 'react';
import { connect } from 'react-redux';

import classes from './style.module.css';


class Alert extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isMinimize: false,
    }
  }
  
  handleToogleMinimize = () => {
    this.setState( prevState => ({
      isMinimize: !prevState.isMinimize
    }));
  }
  
  render() {
    const { alert } = this.props;
    const { isMinimize } = this.state;
    console.log('alert:');
    console.log(alert);
    return (
      <div className={ alert.type === 'error' ? classes.danger : classes.success }>
        <section>
          <h5><span className={ classes.sign } onClick={ this.handleToogleMinimize }>&#9888;</span> { !isMinimize && alert.type.toUpperCase() }</h5>
          {
            !isMinimize && <p>{ alert.message }</p>
          }
        </section>
        {
          !isMinimize && <span className={ classes.closeButton } onClick={ this.handleToogleMinimize }>&times;</span>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  alert: state.alert,
})

export default connect(mapStateToProps)(Alert);
