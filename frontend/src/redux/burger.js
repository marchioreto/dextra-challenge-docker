const NAME = 'challenge/burger/';

export const Types = {
  GET_BURGERS_LIST: `${NAME}GET_BURGERS_LIST`,
  GET_INGREDIENTS_FROM_BURGER: `${NAME}GET_INGREDIENTS_FROM_BURGER`,
  SET_INGREDIENTS_FROM_BURGER: `${NAME}SET_INGREDIENTS_FROM_BURGER`,
  SET_BURGERS_LIST: `${NAME}SET_BURGERS_LIST`,
  SET_BURGER: `${NAME}SET_BURGER`,
};

export function getBurgersList() {
  return {
    type: Types.GET_BURGERS_LIST,
  };
}

export function getIngredientsFromBurger() {
  return {
    type: Types.GET_INGREDIENTS_FROM_BURGER,
  };
}

export function setBurgersList(list) {
  return {
    type: Types.SET_BURGERS_LIST,
    payload: list,
  };
}

export function setIngredientsFromBurger() {
  return {
    type: Types.SET_INGREDIENTS_FROM_BURGER,
  };
}

export function setBurger(burger) {
  return {
    type: Types.SET_BURGER,
    payload: burger,
  };
}

const initialState = {
  item: {},
  list: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_BURGERS_LIST: {
      return state;
    }
    case Types.SET_BURGERS_LIST: {
      state = {
        ...state,
        list: action.payload,
      };
      break;
    }
    case Types.SET_INGREDIENTS_FROM_BURGER: {
      state = {
        ...state,
        item: {
          ...state.item,
          ingredients: action.payload,
        }
      };
      break;
    }
    case Types.SET_BURGER: {
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
