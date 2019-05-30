import { createSelector } from 'reselect';

const INGREDIENT_LIST = {
  bacon: 'Bacon',
  cheese: 'Queijo',
  hamburger: 'Hambúrguer de carne',
  lettuce: 'Alface',
};

const getSaleItens = state => state.sale.itens;
const getBurgerIngredients = burgerIngredients => burgerIngredients;

export const calculatePromotionalIngredients = (ingredients, ingredientType) => {
  let itemPrice = 0;
  let ingredientQuantity = 0;
  ingredients.forEach((ingredient) => {
    if (ingredient.name === ingredientType) {
      ingredientQuantity += 1;
      itemPrice = ingredient.price;
    }
  });
  let promotionalQuantity = ingredientQuantity.valueOf();
  for (let i = 3; i <= ingredientQuantity; i += 1) {
    if (i % 3 === 0) promotionalQuantity -= 1;
  }
  return promotionalQuantity * itemPrice;
};

const calculateMeatPromotional = createSelector(
  getBurgerIngredients,
  ingredients => calculatePromotionalIngredients(ingredients, INGREDIENT_LIST.hamburger),
);

const calculateCheesePromotional = createSelector(
  getBurgerIngredients,
  ingredients => calculatePromotionalIngredients(ingredients, INGREDIENT_LIST.cheese),
);

export const calculateNotPromotionalIngredients = createSelector(
  getBurgerIngredients,
  ingredients => ingredients.reduce((total, ingredient) => {
    if (ingredient.name !== INGREDIENT_LIST.hamburger
      && ingredient.name !== INGREDIENT_LIST.cheese) return total + ingredient.price;
    return total;
  }, 0),
);

export const findLettuce = createSelector(
  getBurgerIngredients,
  ingredients => ingredients.some(ingredient => ingredient.name === INGREDIENT_LIST.lettuce),
);

export const findBacon = createSelector(
  getBurgerIngredients,
  ingredients => ingredients.some(ingredient => ingredient.name === INGREDIENT_LIST.bacon),
);

export const calculateItemPrice = createSelector(
  calculateMeatPromotional,
  calculateCheesePromotional,
  calculateNotPromotionalIngredients,
  findLettuce,
  findBacon,
  (meat, cheese, others, hasLettuce, hasBacon) => {
    if (hasLettuce && !hasBacon) return (meat + cheese + others) * 0.9;
    return (meat + cheese + others);
  },
);

export const calculateCustomBurgerPrice = createSelector(
  getSaleItens,
  saleItens => saleItens.map(burger => (
    { ...burger, total: calculateItemPrice(getBurgerIngredients(burger.ingredients)) }
  )),
);

export const calculateTotalSale = createSelector(
  calculateCustomBurgerPrice,
  saleItens => saleItens.reduce((saleTotal, burger) => saleTotal + burger.total, 0),
);
