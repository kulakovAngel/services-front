import React from 'react';

import classes from './style.module.css';


class PopUp extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className={ classes.popup }>
        <div className={ classes.content }>
          { children }
        </div>
      </div>
    );
  }
}

export default PopUp;
