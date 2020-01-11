import { combineReducers } from 'redux';

const authReduser = (state = {}, action) => {
  switch (action.type) {
    case 'LOG_IN_SUCCESS':
      return action.payload;
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

const pageTitleReduser = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PAGE_TITLE':
      return action.payload;
    default:
      return state;
  }
}

const alertReduser = (state = {}, action) => {
  switch (action.type) {
    case 'SIGN_IN_SUCCESS':
      return {
        type: 'success',
        message: action.payload,
      }
    case 'LOG_IN_ERROR':
    case 'SIGN_IN_ERROR':
    case 'ADD_ALL_SERVICES_ERROR':
    case 'ADD_SERVICE_BY_ID_ERROR':
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
  pageTitle: pageTitleReduser,
  alert: alertReduser,
});

export default reducer;