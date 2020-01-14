import React from 'react';

import classes from './style.module.css';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const daysNames = ['Mn', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su'];

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        day: new Date().getDate(),
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
      },
      ...this.setDate(Date.now())
    }
    this.handlerChange = this.handlerChange.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.getClassName = this.getClassName.bind(this);
    this.isToday = this.isToday.bind(this);
    this.handleSelectDate = this.handleSelectDate.bind(this);
    this.isSelected = this.isSelected.bind(this);
    this.getDisabled = this.getDisabled.bind(this);
    
  }
  
  getDisabled() {
    let {
      disabled,
    } = this.props;
    
    const current = new Date();
    
    disabled = disabled.map(item => {
      //парсим объект даты и фильтруем относительно текущего месяца
      let datesArr = item.split('-');
      return (
        +datesArr[0] === current.getFullYear() &&
        +datesArr[1] - 1 === current.getMonth()
        ?
        +datesArr[2] : null
      );
    }).filter(item => item);
    return disabled;
  }
  
  setDate(ms) {
    let {
      previousDisabled,
    } = this.props;
    
    const current = new Date(ms);
    
    current.setDate(0);
    const startWeekDayOfMonth = current.getDay();
    current.setDate(1);
    current.setMonth(current.getMonth() + 2);
    current.setDate(0);
    
    const disabled = this.getDisabled();
    
    const allMonthdays = Array.apply(null, {length: current.getDate()}).map((item, i) => ({
      day: i+1,
      disabled: disabled.includes(i + 1) || (previousDisabled && (new Date(current).setDate(i + 2)) <= new Date()),
    }))
    current.setDate(1);
    
    return {
      current,
      startWeekDayOfMonth,
      allMonthdays,
    }
  }
  
  handlePrevious() {
    this.handlerChange(-1)
  }
  
  handleNext() {
    this.handlerChange(1)
  }
  
  handlerChange(inc) {
    this.setState(prevState => {
      const current = new Date(prevState.current);
      current.setMonth(current.getMonth() + inc);
      return ({
        ...this.setDate(current)
      });
    });
  }
  
  handleSelectDate(e) {
    const day = +e.target.textContent;
    this.setState(prevState => ({
      selected: {
        day,
        month: prevState.current.getMonth(),
        year: prevState.current.getFullYear(),
      }
    }));
  }
  
  isToday(current, dayOfMonth) {
    const today = new Date();
    return (
      today.getFullYear() === current.getFullYear() &&
      today.getMonth() === current.getMonth() &&
      today.getDate() === dayOfMonth
    )
  }
  
  isSelected(dayOfMonth) {
    const {
      day,
      month,
      year,
    } = this.state.selected;
    const {
      current,
    } = this.state;
    return (
      day === dayOfMonth &&
      month === current.getMonth() &&
      year === current.getFullYear()
    )
  }
  
  getClassName(current, item) {
    let className = '';
    className += this.isToday(current, item.day) ? classes.today + ' ' : '';
    className += this.isSelected(item.day) ? classes.selected + ' ' : '';
    className += item.disabled ? classes.disabled : '';
    return className;
    
  }
  
  render() {
    const {
      startWeekDayOfMonth,
      allMonthdays,
      current,
    } = this.state;
    console.log('render');
    console.log(this.state);
    return (
      <div className={ classes.datePicker }>
        <button onClick={ this.handlePrevious }>&#8592;</button>
        <div className={ classes.monthTitle }><h5>{ monthNames[current.getMonth()] }</h5></div>
        <button onClick={ this.handleNext }>&#8594;</button>
        { daysNames.map(item => <div key={item}>{ item }</div>) }
        { allMonthdays.map((item, i) =>(
          <div
            className={ this.getClassName(current, item) }
            style={ !i ? { gridColumnStart: `${startWeekDayOfMonth + 1}` } : null}
            onClick={ this.handleSelectDate }
            key={ item.day }
          >
            { item.day }
          </div>
        )) }
      </div>
    );
  }
}


export default DatePicker;