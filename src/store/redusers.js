import { combineReducers } from 'redux';

const authReduser = (state = {isAuthorized: false}, action) => {
  switch (action.type) {
    case 'LOG_IN_SUCCESS':
      const auth = {
        ...action.payload,
        isAuthorized: true,
      }
      return auth;
    case 'NEW_TOKEN':
      console.log(state, action.payload);
      return Object.assign({}, state, action.payload);
    case 'TRY_LOG_OUT':
      return {isAuthorized: false}
    default:
      return state;
  }
}

const servicesReduser = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ALL_SERVICES':
      return action.payload;
    default:
      return state;
  }
}

const singleServiceReduser = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_SERVICE_BY_ID':
      return action.payload;
    default:
      return state;
  }
}

const ordersReduser = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ALL_ORDERS':
      return action.payload;
    default:
      return state;
  }
}

const pageTitleReduser = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PAGE_TITLE':
      return action.payload;
    default:
      return state;
  }
}

const toogleShowCalendarReduser = (state = {isOrderInProgress: false}, action) => {
  switch (action.type) {
    case 'TOOGLE_SHOW_CALENDAR':
      return action.payload;
    default:
      return state;
  }
}

const alertReduser = (state = {}, action) => {
  switch (action.type) {
    case 'POST_ORDER_SUCCESS':  
    case 'SIGN_IN_SUCCESS':
    case 'PUT_ORDER_SUCCESS':
      return {
        type: 'success',
        message: action.payload,
      }
    case 'LOG_IN_ERROR':
    case 'SIGN_IN_ERROR':
    case 'ADD_ALL_SERVICES_ERROR':
    case 'ADD_SERVICE_BY_ID_ERROR':
    case 'PUT_ORDER_ERROR':
      return {
        type: 'error',
        message: action.message,
      };
    case 'ERRORS_REMOVE':
      return {};
      
    case 'DEFAULT_ERROR':
      return action.payload;
      
    default:
      return state;
  }
}

const reducer = combineReducers({
  auth: authReduser,
  services: servicesReduser,
  service: singleServiceReduser,
  orders: ordersReduser,
  pageTitle: pageTitleReduser,
  userDatePickerState: toogleShowCalendarReduser,
  alert: alertReduser,
});

export default reducer;