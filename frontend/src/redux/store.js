import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas/rootSagas';

import burger from './burger';
import ingredient from './ingredient';
import sale from './sale';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  burger,
  ingredient,
  sale,
});

export const store = createStore(
  rootReducer,
  {},
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
