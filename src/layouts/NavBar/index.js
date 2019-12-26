import React from 'react';

import NavLinks from './../NavLinks';
import Logotype from './../Logotype';

import classes from './style.module.css';

function NavBar() {
  return (
    <nav className={ classes.nav }>
      <NavLinks />
      <Logotype />
    </nav>
  )
}

export default NavBar;
