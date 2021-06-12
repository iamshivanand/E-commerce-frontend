import axios from "axios";

const url = "http://localhost:8000/products";

///fetch the products with limit
export const fetchProducts = async (page, limit) =>
  await axios.get(`${url}?page=${page}&limit=${limit}`);

  //create a product or add product to database
export const createProduct = async (newProduct) =>
  await axios.post(url, newProduct);

  //to search the product according to title
export const searchProducts = async (name) =>
  await axios.get(`${url}/search/${name}`);
