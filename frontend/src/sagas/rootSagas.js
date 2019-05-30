import { all, fork } from 'redux-saga/effects';

import burger from './burger';
import ingredient from './ingredient';
import sale from './sale';

function* rootSaga() {
  yield all([
    fork(burger),
    fork(ingredient),
    fork(sale),
  ]);
}

export default rootSaga;
