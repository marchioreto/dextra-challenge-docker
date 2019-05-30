const NAME = 'challenge/ingredient/';

export const Types = {
  GET_INGREDIENTS_LIST: `${NAME}GET_INGREDIENTS_LIST`,
  SET_INGREDIENTS_LIST: `${NAME}SET_INGREDIENTS_LIST`,
  SET_INGREDIENT: `${NAME}SET_INGREDIENT`,
};

export function getIngredientsList() {
  return {
    type: Types.GET_INGREDIENTS_LIST,
  };
}

export function setIngredientsList(list) {
  return {
    type: Types.SET_INGREDIENTS_LIST,
    payload: list,
  };
}

export function setIngredient(ingredient) {
  return {
    type: Types.SET_INGREDIENT,
    payload: ingredient,
  };
}

const initialState = {
  item: {},
  list: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_INGREDIENTS_LIST: {
      return state;
    }
    case Types.SET_INGREDIENTS_LIST: {
      state = {
        ...state,
        list: action.payload,
      };
      break;
    }
    case Types.SET_INGREDIENT: {
      state = {
        ...state,
        item: action.payload,
      };
      break;
    }
    default: return state;
  }
  return state;
}
