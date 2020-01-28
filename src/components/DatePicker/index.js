import React from 'react';

import classes from './style.module.css';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const daysNames = ['Mn', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su'];

class DatePicker extends React.Component {
  static defaultProps = {
    wrapperClassName: classes.datePicker,
    arrowClassName: classes.arrow,
    monthTitleClassName: classes.monthTitle,
    disabledClassName: classes.disabled,
    todayClassName: classes.today,
    selectedClassName: classes.selected,
  }
  constructor(props) {
    super(props);
//    this.arrowC = props.classNames.arrow || classes.arrow;
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

  

  getDisabled(current) {
    let { disabled } = this.props;
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
    return(disabled);
  }
  
  componentDidUpdate(prevProps) {
    //обновление DISABLED даты
    if (prevProps.disabled !== this.props.disabled)
      this.setState(prevState => ({
        ...this.setDate(prevState.current)
      }));
  }
  
  setDate(ms) {
    let { previousDisabled } = this.props;
    const current = new Date(ms);
    
    current.setDate(0);
    const startWeekDayOfMonth = current.getDay();
    current.setDate(1);
    current.setMonth(current.getMonth() + 2);
    current.setDate(0);
    const disabled = this.getDisabled(current);
    
    const allMonthDays = Array.apply(null, {length: current.getDate()}).map((item, i) => ({
      day: i+1,
      disabled: disabled.includes(i + 1) || (previousDisabled && (new Date(current).setDate(i + 1)) <= new Date()),
    }))
    current.setDate(1);
    
    return {
      current,
      startWeekDayOfMonth,
      allMonthDays,
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
    if (e.target.classList.contains(classes.disabled)) return;
    const day = +e.target.textContent;
    this.setState(prevState => ({
      selected: {
        day,
        month: prevState.current.getMonth(),
        year: prevState.current.getFullYear(),
      }
    }), () => {
      const {
        day,
        month,
        year,
      } = this.state.selected;
      this.props.onClick(`${year}-${month + 1}-${day}`);
    });
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
      current,
      selected: {
        day,
        month,
        year,
      }
    } = this.state;
    return (
      day === dayOfMonth &&
      month === current.getMonth() &&
      year === current.getFullYear()
    )
  }
  
  getClassName(current, item) {
    const {
      disabledClassName,
      todayClassName,
      selectedClassName,
    } = this.props;
    let className = classes.cell + ' ';
    className += this.isToday(current, item.day) ? todayClassName + ' ' : ' ';
    className += this.isSelected(item.day) ? selectedClassName + ' ' : ' ';
    className += item.disabled ? disabledClassName : '';
    return className.trim();
  }
  
  render() {
    const {
      startWeekDayOfMonth,
      allMonthDays,
      current,
    } = this.state;
    const {
      wrapperClassName,
      arrowClassName,
      monthTitleClassName,
    } = this.props;
    return (
      <div className={ wrapperClassName }>
        <button onClick={ this.handlePrevious } className={ arrowClassName }>&#8592;</button>
        <div className={ monthTitleClassName }><h5>{ monthNames[current.getMonth()] }</h5></div>
        <button onClick={ this.handleNext } className={ arrowClassName }>&#8594;</button>
        { daysNames.map(item => <div key={item}>{ item }</div>) }
        { allMonthDays.map((item, i) => {
          const className = this.getClassName(current, item);
          const rest = className && {
            className,
          }
          return (
            <div
              { ...rest }
              style={ !i ? { gridColumnStart: `${startWeekDayOfMonth + 1}` } : null}
              onClick={ this.handleSelectDate }
              key={ item.day }
            >
              { item.day }
            </div>
          )
        }) }
      </div>
    );
  }
}


export default DatePicker;