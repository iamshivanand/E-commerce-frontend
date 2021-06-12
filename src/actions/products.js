import * as api from "../api";
import {
  FETCH_ALL_PRODUCTS,
  CREATE_PRODUCT,
  SEARCH_PRODUCT,
} from "./actionsType/actionType";

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
  
    try {
      const { data } = await api.fetchProducts(page, 10);
      const { result } = data;
      const newData = [...prevResults, ...result];
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

//this action is to search the product from the database

export const searchProducts = (name) => async (dispatch) => {
  try {
    const { data } = await api.searchProducts(name);
    const action = {
      type: SEARCH_PRODUCT,
      payload: data,
    };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
