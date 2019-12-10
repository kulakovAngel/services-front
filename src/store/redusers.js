import { combineReducers } from 'redux';

const authReduser = (state = {}, action) => {
  switch (action.type) {
    case 'LOG_IN_SUCCESS':
      console.log(action);
      return action.payload;
    case 'SIGN_IN_SUCCESS':
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
    case 'LOG_IN_ERROR':
      return {
        type: 'error',
        message: action.message,
      };
    case 'DEFAULT_ERROR': //
      return action.payload;
    default:
      return state;
  }
}

const reducer = combineReducers({
  auth: authReduser,
  pageTitle: pageTitleReduser,
  alert: alertReduser,
});

export default reducer;