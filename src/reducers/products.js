import {
  FETCH_ALL_PRODUCTS,
  CREATE_PRODUCT,
  SEARCH_PRODUCT,
} from "../actions/actionsType/actionType";
const initalState = {
  products: [],
  searchedProducts: [],
};
const products = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case CREATE_PRODUCT:
      return {
        ...state,
        products: [...products, action.payload],
      };
    case SEARCH_PRODUCT:
      return {
        ...state,
        searchedProducts: action.payload,
      };
    default:
      return state;
  }
};

export default products;
