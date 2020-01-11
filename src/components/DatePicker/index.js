import React from 'react';

import classes from './style.module.css';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const daysNames = ['Mn', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su'];

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.setDate(Date.now())
  }
  
  setDate(ms) {
    const current = new Date(ms);
    current.setDate(1);
    this.startWeekDayOfMonth = current.getDay();
    current.setMonth(current.getMonth() + 1);
    current.setDate(0);
    this.allMonthdays = Array.apply(null, {length: current.getDate()}).map((item, i) => i+1)
//    console.log(allMonthdays);
  }
  
  render() {
    const startWeekDayOfMonth = this.startWeekDayOfMonth;
    return (
      <div className={ classes.datePicker }>
        <button>&#8592;</button>
        <div className={ classes.monthTitle }><h5>{ monthNames[new Date().getMonth()] }</h5></div>
        <button>&#8594;</button>
        { daysNames.map(item => <div>{ item }</div>) }
        { this.allMonthdays.map((item, i) =>(
          <div style={ !i ? { gridColumnStart: `${startWeekDayOfMonth}` } : null}>{ item }</div>
        )) }
      </div>
    );
  }
}


export default DatePicker;