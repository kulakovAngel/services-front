import React from 'react';
import { connect } from 'react-redux';

import classes from './style.module.css';


class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      isAnimationInProgress: false,
    }
    this.ref = React.createRef();
    this.handleLeft = this.handleLeft.bind(this);
    this.handleRight = this.handleRight.bind(this);
  }
  
  componentDidMount() {
//    console.log(this.props.children[this.state.i]);
//    this.props.children[this.state.i].classList.add('animationLeft');
  }
  
  handleLeft() {
    const { length } = this.props.children;
    this.setState((prevState) => ({
      i: (prevState.i > 0) ? prevState.i - 1 : length - 1,
      isAnimationInProgress: true,
    }));
    this.ref.current.classList.add(classes.animationLeft);
    this.ref.current.addEventListener('animationend', () => {
      this.ref.current.classList.remove(classes.animationLeft);
      this.setState({ isAnimationInProgress: false });
    });
  }
  
  handleRight() {
    const { length } = this.props.children;
    this.setState((prevState) => ({
      i: (prevState.i < length - 1) ? prevState.i + 1 : 0,
      isAnimationInProgress: true,
    }));
    this.ref.current.classList.add(classes.animationRight);
    this.ref.current.addEventListener('animationend', () => {
      this.ref.current.classList.remove(classes.animationRight);
      this.setState({ isAnimationInProgress: false });
    });
  }
  
  render() {
    const { children, className: css } = this.props
    const { i, isAnimationInProgress } = this.state;
    const { length } = this.props.children;
    
    const prevChildNum = (i > 0) ? i-1 : length - 1;
    return (
      <div className={ css } style={{ position: 'relative', overflowX: 'hidden' }}>
        <div className={ classes.screen }>
          { children[prevChildNum] }
          <div ref={ this.ref } className={ classes.item }>
            { children[i] }
          </div>
        </div>
        <button disabled={isAnimationInProgress} className={ classes.arrowLeft } onClick={ this.handleLeft }>
          &laquo;
        </button>
        <button disabled={isAnimationInProgress} className={ classes.arrowRight } onClick={ this.handleRight }>
          &raquo;
        </button>
      </div>
    );
  }
}

export default Slider;