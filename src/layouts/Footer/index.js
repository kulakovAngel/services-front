import React from 'react';

import classes from './style.module.css';


class Footer extends React.Component {
  render() {
    return (
      <footer className={ classes.footer }>
        <section>
          <h6>♾ CoolSoft</h6>
          &copy; {new Date().getFullYear()}
        </section>
        <section>
          <h6>Contacts</h6>
          Belarys, Hrodno
        </section>
      </footer>
    );
  }
}

export default Footer;