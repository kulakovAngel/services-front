import React from 'react';
import { Link } from 'react-router-dom';

import classes from './style.module.css';

function Logotype() {
  return (
    <div class={ classes.logo }>
      <Link to='/'>&#9854;</Link>
    </div>
  )
}

export default Logotype;
