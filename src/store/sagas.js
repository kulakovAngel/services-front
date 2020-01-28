import { call, put, takeEvery } from 'redux-saga/effects';

import {
  logIn,
  signIn,
  getServices,
  getServiceById,
  getOrders,
  postOrder,
} from './../api';

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
    const response = yield call(signIn, action.payload);
    yield put({type: 'SIGN_IN_SUCCESS',
               payload: response.message});
  } catch(e) {
    yield put({type: 'SIGN_IN_ERROR', message: e.error});
  }
}

function* getServicesSaga() {
  try {
    const services = yield call(getServices);
    yield put({type: 'ADD_ALL_SERVICES',
               payload: services});
  } catch(e) {
    yield put({type: 'ADD_ALL_SERVICES_ERROR', message: e.error});
  }
}

function* getServiceByIdSaga(action) {
  try {
    const service = yield call(getServiceById, action.payload);
    yield put({
      type: 'ADD_SERVICE_BY_ID',
      payload: service
    });
  } catch(e) {
    yield put({type: 'ADD_SERVICE_BY_ID_ERROR', message: e.error});
  }
}

function* getOrdersSaga() {
  try {
    const orders = yield call(getOrders);
    yield put({
      type: 'ADD_ALL_ORDERS',
      payload: orders,
    });
  } catch(e) {
    yield put({type: 'ADD_ALL_ORDERS_ERROR', message: e.error});
  }
}

function* postOrderSaga(action) {
  try {
    const response = yield call(postOrder, action.payload);
    yield put({
      type: 'POST_ORDER_SUCCESS',
      payload: response.message,
    });
    yield put({
      type: 'LOG_IN_SUCCESS',
      payload: {
        name: action.payload.name,
        jwt: response.jwt,
      }});
    yield put({
      type: 'TRY_GET_ORDERS',
    });
  } catch(e) {
    yield put({
      type: 'POST_ORDER_ERROR',
      message: e.error,
    });
  }
}

function* saga() {
  yield takeEvery('TRY_LOG_IN', logInSaga);
  yield takeEvery('TRY_SIGN_IN', signInSaga);
  yield takeEvery('TRY_GET_SERVICES', getServicesSaga);
  yield takeEvery('TRY_GET_SERVICE_BY_ID', getServiceByIdSaga);
  yield takeEvery('TRY_GET_ORDERS', getOrdersSaga);
  yield takeEvery('TRY_POST_ORDER', postOrderSaga);
}

export default saga;