import React from 'react';

import classes from './style.module.css';


class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active ? +props.active : 0,
    }
    this.handleToggleTab = this.handleToggleTab.bind(this);
  }
  
  handleToggleTab(e) {
    this.setState({
      active: +e.target.dataset.index,
    })
    e.preventDefault();
  }
  
  render() {
    const { children } = this.props;
    return (
      <div className={ `${classes.tabs} ${this.props.className}` } style={ this.props.style }>
        <div className={ classes.titles }>
          {children.map((item, i) => (
            <a href='/'
              data-index={ i }
              onClick={ this.handleToggleTab }
              className={ (i===this.state.active) ? classes.titleActive : classes.title}
              key={ item.title }>
                { item.title }
            </a>
          ))}
        </div>
        <div className={ classes.content }>
          { children[this.state.active].content }
        </div>
      </div>
    );
  }
}

export default Tabs;
