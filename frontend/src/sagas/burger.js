/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-syntax */

import {
  all, call, fork, put, take,
} from 'redux-saga/effects';

import { Types } from '../redux/burger';
import * as API from '../api/burger';

export function* handleIngredientsFromBurger(burgerList) {
  const burgerListWithIngredients = [];
  for (const burger of burgerList) {
    const { data } = yield call(API.getIngredientsFromBurger, burger._links.ingredients.href);
    burger.ingredients = data._embedded.ingredients;
    burgerListWithIngredients.push(burger);
  }

  return burgerListWithIngredients;
}

export function* handleGetBurgers() {
  const { data } = yield call(API.getAll);
  if (data) {
    const burgerListWithIngredients = yield call(handleIngredientsFromBurger, data._embedded.burgers);
    yield put({ type: Types.SET_BURGERS_LIST, payload: burgerListWithIngredients });
  }
}

export function* watchGetBurgers() {
  while (true) {
    yield take(Types.GET_BURGERS_LIST);
    yield call(handleGetBurgers);
  }
}

function* sagas() {
  yield all([
    fork(watchGetBurgers),
  ]);
}

export default sagas;
