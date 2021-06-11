import React, { useEffect } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Product from "./Product/Product";
import Filter from "./HomepageFilter";
import { getProduct } from "../actions/products";
const HomePage = () => {
  const products = useSelector((state) => state.products);
  // const { result, next } = results;
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(1);

  // console.log(result, next);

  useEffect(() => {
    dispatch(getProduct(page,products));
  }, [page]);

  const [Filters, setFilters] = React.useState({
    brandFilter: [],
    categoryFilter: [],
    colorFilter: [],
  });

  //infinite scroll

  const scrollToEnd = () => {
    console.log("this is the end of the page:", page);
    // console.log("next", !next, next);

    setPage(page + 1);

    return;
  };

  window.onscroll = function () {
    // if the page has reached to the bottom

    const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
    // console.log("1:", scrollTop + clientHeight);
    // console.log("2", scrollHeight);

    if (scrollTop + clientHeight >= scrollHeight - 1) {
      scrollToEnd();
    }
  };

  const AllFiteredProduct = [];
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < Filters.brandFilter.length; j++) {
      if (products[i].brand === Filters.brandFilter[j]) {
        AllFiteredProduct.push(products[i]);
      }
    }

    for (let j = 0; j < Filters.colorFilter.length; j++) {
      if (products[i].color === Filters.colorFilter[j]) {
        AllFiteredProduct.push(products[i]);
      }
    }
    for (let j = 0; j < Filters.categoryFilter.length; j++) {
      for (let k = 0; k < products[i].category.length; k++) {
        if (products[i].category[k] === Filters.categoryFilter[j]) {
          AllFiteredProduct.push(products[i]);
        }
      }
    }
  }
  const uniqueFilteredProducts = [...new Set(AllFiteredProduct)];

  // console.log("allFilters", allFilters);
  // console.log("uniqueFilteredProducts", uniqueFilteredProducts);

  return !products.length ? (
    <CircularProgress />
  ) : (
    <div className="mainContainer">
      <Grid container>
        <Filter Filters={Filters} setFilters={setFilters} />
        <Grid item xs={12} sm={12} md={8}>
          {!uniqueFilteredProducts.length
            ? products.map((product) => (
                <Grid key={product._id} item xs={12}>
                  <Product product={product} />
                </Grid>
              ))
            : uniqueFilteredProducts.map((product) => (
                <Grid key={product._id} item xs={12}>
                  <Product product={product} />
                </Grid>
              ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
