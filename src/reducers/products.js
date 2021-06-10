import { FETCH_ALL_PRODUCTS, CREATE_PRODUCT } from "../actions/actionsType/actionType";
const products = (products = [], action) => {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS:
      return action.payload;
    case CREATE_PRODUCT:
      return [...products, action.payload];

    default:
      return products;
  }
};

export default products;
