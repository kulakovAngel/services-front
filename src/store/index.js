import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';

import reducer from './redusers';
import saga from './sagas';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleWare),
);

sagaMiddleWare.run(saga);

export default store;