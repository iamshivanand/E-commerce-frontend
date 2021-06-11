import axios from "axios";

const url = "http://localhost:8000/products";

export const fetchProducts = async (page,limit) => await axios.get(`${url}?page=${page}&limit=${limit}`);
export const createProduct = async (newProduct) =>
  await axios.post(url, newProduct);
