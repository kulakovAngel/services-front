import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './style.module.css';


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
        <li><NavLink exact to='/' activeClassName={ classes.active } onClick={ this.handleSelect }> Home </NavLink></li>
        <li><NavLink to='/services' activeClassName={ classes.active } onClick={ this.handleSelect }> Our Services </NavLink></li>
        {
          !this.props.isAuthorized && <li><NavLink to='/auth' activeClassName={ classes.active } onClick={ this.handleSelect }> Authorization </NavLink></li>
        }
        {
          this.props.rights === '2' && <li><NavLink to='/admin' activeClassName={ classes.active } onClick={ this.handleSelect }> Admin Page </NavLink></li>
        }
        <li><NavLink to='/about' activeClassName={ classes.active } onClick={ this.handleSelect }> About Us </NavLink></li>
      </ul>
    );
  };
  
  componentDidUpdate(prevProps, prevState) {
    if (this.state.isActive !== prevState.isActive) {
      document.body.classList.toggle('overflow');
    }
  }
  
  render() {
    const { isActive } = this.state;
    return (
      <div className={ classes.container }>
        <a href='/' className={ isActive ? classes.navButtonActive : classes.navButton } onClick={ this.handleClick }>
          <span></span>
          <span></span>
          <span></span>
        </a>
        {
          isActive &&
          <div className={ classes.linksContainer }>{ this.getNavList() }</div>
        }
      </div>
    );
  }
}

export default NavLinks;