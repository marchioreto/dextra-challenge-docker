import { createSelector } from 'reselect';

const calculateItemPrice = createSelector(
  ingredients => ingredients,
  ingredients => ingredients.reduce((total, item) => total + item.price, 0),
);

export const calculateBurgerPrice = createSelector(
  state => state.burger.list,
  burgerList => burgerList.map(burger => ({ ...burger, total: calculateItemPrice(burger.ingredients) })),
);
