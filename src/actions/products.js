import * as api from "../api";
import { FETCH_ALL_PRODUCTS, CREATE_PRODUCT } from "./actionsType/actionType";

//this actions is to get all the products from database
export const getProduct = (page, prevResults) => async (dispatch) => {
  if (!page) {
    console.log("Page is undefined", !page);
    try {
      const { data } = await api.fetchProducts(1, 10);
      const action = {
        type: FETCH_ALL_PRODUCTS,
        payload: data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error.message);
    }
  } else {
    console.log("Page is =", page, !page);
    try {
      const { data } = await api.fetchProducts(page, 10);
      const { result, next } = data;
      const newData = [...prevResults, ...result];

      console.log("prevResults", prevResults);
      console.log("result", result);
      console.log("newData", newData);
      console.log("next", next);
      const action = {
        type: FETCH_ALL_PRODUCTS,
        payload: newData,
      };
      dispatch(action);
    } catch (error) {
      console.log(error.message);
    }
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
