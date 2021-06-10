import * as api from "../api";
import { FETCH_ALL_PRODUCTS, CREATE_PRODUCT } from "./actionsType/actionType";

//this actions is to get all the products from database
export const getProduct = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts();
    const action = {
      type: FETCH_ALL_PRODUCTS,
      payload: data,
    };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

//this action is to Add a product in database
export const createProduct = (productData) => async (dispatch) => {
  try {
    const { data } = await api.createProduct(productData);
    const action = {
      type: CREATE_PRODUCT,
      payload: data,
    };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};
