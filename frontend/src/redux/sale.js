const NAME = 'challenge/sale/';

export const Types = {
  ADD_BURGER: `${NAME}ADD_BURGER`,
  ADD_CUSTOM_BURGER_TO_SALE: `${NAME}ADD_CUSTOM_BURGER_TO_SALE`,
  ADD_INGREDIENT_TO_BURGER: `${NAME}ADD_INGREDIENT_TO_BURGER`,
  CANCEL_SALE: `${NAME}CANCEL_SALE`,
  GET_SALE_HISTORY: `${NAME}GET_SALE_HISTORY`,
  MAKE_CUSTOM_BURGER: `${NAME}MAKE_CUSTOM_BURGER`,
  REMOVE_BURGER: `${NAME}REMOVE_BURGER`,
  RESET_CUSTOM_BURGER: `${NAME}RESET_CUSTOM_BURGER`,
  SAVE_REQUEST: `${NAME}SAVE_REQUEST`,
  SET_SALE_HISTORY: `${NAME}SET_SALE_HISTORY`,
};

export function addBurger(burger) {
  return {
    type: Types.ADD_BURGER,
    payload: burger,
  };
}

export function addCustomBurgerToSale(burger) {
  return {
    type: Types.ADD_CUSTOM_BURGER_TO_SALE,
    payload: burger,
  };
}

export function addIngredientToBurger(ingredient) {
  return {
    type: Types.ADD_INGREDIENT_TO_BURGER,
    payload: ingredient,
  };
}

export function getSaleHistory() {
  return {
    type: Types.GET_SALE_HISTORY,
  };
}

export function setSaleHistory(sales) {
  return {
    type: Types.SET_SALE_HISTORY,
    payload: sales,
  };
}

export function cancelSale() {
  return {
    type: Types.CANCEL_SALE,
    payload: {},
  };
}

export function makeCustomBurger(burger) {
  return {
    type: Types.MAKE_CUSTOM_BURGER,
    payload: burger,
  };
}

export function removeBurger(burgerList, burgerToRemove) {
  return {
    type: Types.REMOVE_BURGER,
    payload: burgerList.filter(burger => burger !== burgerToRemove),
  };
}

export function resetCustomBurger(customBurger) {
  return {
    type: Types.RESET_CUSTOM_BURGER,
    payload: customBurger,
  };
}

export function saveRequest(sale) {
  return {
    type: Types.SAVE_REQUEST,
    payload: sale,
  };
}

const initialState = {
  custom: {},
  itens: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_BURGER: {
      state = {
        ...state,
        itens: [
          ...state.itens,
          action.payload,
        ],
      };
      break;
    }
    case Types.ADD_CUSTOM_BURGER_TO_SALE: {
      state = {
        ...state,
        itens: [
          ...state.itens,
          action.payload,
        ],
      };
      break;
    }
    case Types.ADD_INGREDIENT_TO_BURGER: {
      state = {
        ...state,
        custom: {
          ...state.custom,
          ingredients: [
            ...state.custom.ingredients,
            action.payload,
          ],
        },
      };
      break;
    }
    case Types.SET_SALE_HISTORY: {
      state = {
        ...state,
        history: action.payload,
      };
      break;
    }
    case Types.CANCEL_SALE: {
      state = {
        ...state,
        itens: [],
        custom: {},
      };
      break;
    }
    case Types.MAKE_CUSTOM_BURGER: {
      state = {
        ...state,
        custom: action.payload,
      };
      break;
    }
    case Types.REMOVE_BURGER: {
      state = {
        ...state,
        itens: [
          ...action.payload,
        ]
      };      
      break;
    }
    case Types.RESET_CUSTOM_BURGER: {
      state = {
        ...state,
        custom: action.payload,
      };
      break;
    }
    default: return state;
  }
  return state;
}
