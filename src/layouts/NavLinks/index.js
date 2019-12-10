import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './style.module.css';

const PAGES = [{path: '/',
                title: 'Home',
                exact: true},
               {path: '/about',
                title: 'About Company',
                exact: false},
               {path: '/auth',
                title: 'Authorization',
                exact: false},
              ];


class NavLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.getNavList = this.getNavList.bind(this);
  }
  
  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => (
      {isActive: !prevState.isActive}
    ));
  }
  
  handleSelect(e) {
    this.setState((prevState) => (
      {isActive: !prevState.isActive}
    ));
  }
  
  getNavList() {
    return (
      <ul>
      {
        PAGES.map((item) => (
          <li key={ item.title }>
            {
              item.exact
              ?
                <NavLink exact to={ item.path } activeClassName={ classes.active } onClick={ this.handleSelect }>{ item.title }</NavLink>
              :
                <NavLink to={ item.path } activeClassName={ classes.active } onClick={ this.handleSelect }>{ item.title }</NavLink>
            }
          </li>
        ))
      }
      </ul>
    );
  };
  
  render() {
    const { isActive } = this.state;
    return (
      <div className={ classes.container }>
        <a href='#' className={ isActive ? classes.navButtonActive : classes.navButton } onClick={ this.handleClick }>
          <span></span>
          <span></span>
          <span></span>
        </a>
        {
          this.state.isActive &&
          <div className={ classes.linksContainer }>{ this.getNavList() }</div>
        }
      </div>
    );
  }
}

export default NavLinks;