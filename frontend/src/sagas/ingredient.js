import {
  all, call, fork, put, take,
} from 'redux-saga/effects';

import { Types } from '../redux/ingredient';
import * as API from '../api/ingredient';

export function* handleGetIngredients() {
  const { data } = yield call(API.getAll);
  yield put({ type: Types.SET_INGREDIENTS_LIST, payload: data._embedded.ingredients });
}

export function* watchGetIngredients() {
  while (true) {
    yield take(Types.GET_INGREDIENTS_LIST);
    yield call(handleGetIngredients);
  }
}

function* sagas() {
  yield all([
    fork(watchGetIngredients),
  ]);
}

export default sagas;
