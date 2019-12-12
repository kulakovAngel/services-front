import { call, put, takeEvery } from 'redux-saga/effects';

import { logIn, signIn } from './../api';

function* logInSaga(action) {
  try {
    const user = yield call(logIn, action.payload);
    yield put({type: 'LOG_IN_SUCCESS',
               payload: user});
    yield put({type: 'ERRORS_REMOVE'});
  } catch(e) {
    yield put({type: 'LOG_IN_ERROR', message: e.error});
  }
}

function* signInSaga(action) {
  try {
    const message = yield call(signIn, action.payload);
    yield put({type: 'SIGN_IN_SUCCESS',
               payload: message});
  } catch(e) {
    yield put({type: 'SIGN_IN_ERROR', message: e.error});
  }
}

function* saga() {
  yield takeEvery('TRY_LOG_IN', logInSaga);
  yield takeEvery('TRY_SIGN_IN', signInSaga);
}

export default saga;