import {
  all, call, fork, put, take,
} from 'redux-saga/effects';

import { Types } from '../redux/sale';
import * as API from '../api/sale';

export function* handleAddCustomBurgerToSale() {
  yield put({ type: Types.RESET_CUSTOM_BURGER, payload: {} });
}

export function* watchAddCustomBurgerToSale() {
  while (true) {
    yield take(Types.ADD_CUSTOM_BURGER_TO_SALE);
    yield call(handleAddCustomBurgerToSale);
  }
}

export function* handleSaveRequest(sale) {
  const { data } = yield call(API.saveSale, { total: sale.total });
  if (data) {
    const saleUrl = data._links.burgers.href;
    const burgerUriList = sale.itens.map(saleItem => saleItem._links.burger.href).join('\n');
    yield call(API.saveItens, { ...sale, saleUrl, burgerUriList });
    yield put({ type: Types.CANCEL_SALE, payload: {} });
  }
}

export function* watchSaveRequest() {
  while (true) {
    const { payload } = yield take(Types.SAVE_REQUEST);
    yield call(handleSaveRequest, payload);
  }
}

export function* handleGetSalesItens(item) {
  const { data } = yield call(API.getSalesItens, item.id);
  return { ...item, itens: data._embedded.burgers };
}

export function* handleGetSalesHistory() {
  const { data } = yield call(API.getSalesHistory);
  if (data) {
    const { sales } = data._embedded;
    const salesWithItens = yield all(sales.map(item => call(handleGetSalesItens, item)));
    yield put({ type: Types.SET_SALE_HISTORY, payload: salesWithItens });
  }
}

export function* watchGetSalesHistory() {
  while (true) {
    yield take(Types.GET_SALE_HISTORY);
    yield call(handleGetSalesHistory);
  }
}


function* sagas() {
  yield all([
    fork(watchAddCustomBurgerToSale),
    fork(watchSaveRequest),
    fork(watchGetSalesHistory),
  ]);
}

export default sagas;
