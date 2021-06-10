import axios from "axios";

const url = "http://localhost:8000/products";

export const fetchProducts = async () => await axios.get(url);
export const createProduct = async (newProduct) =>
  await axios.post(url, newProduct);
