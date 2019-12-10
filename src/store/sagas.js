import { call, put, takeEvery } from 'redux-saga/effects';

import { logIn } from './../api';

function* logInSaga(action) {
  try {
    
    const user = yield call(logIn, action.payload);
    yield put({type: 'LOG_IN_SUCCESS',
               payload: user});
  } catch(e) {
    yield put({type: 'LOG_IN_ERROR', message: e.error});
  }
}

function* saga() {
  yield takeEvery('TRY_LOG_IN', logInSaga);
  //yield takeEvery('TRY_SIGN_IN', signInSaga);
}

export default saga;