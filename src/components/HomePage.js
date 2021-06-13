import React, { useEffect } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Product from "./Product/Product";
import Filter from "./HomepageFilter";
import { getProduct } from "../actions/products";
const HomePage = () => {
  const [priceRange, setPriceRange] = React.useState([7, 2200]);
  const [Filters, setFilters] = React.useState({
    brandFilter: [],
    categoryFilter: [],
    colorFilter: [],
  });
  const [page, setPage] = React.useState(1);
  const dispatch = useDispatch();
  let products = [];
  const Allproducts = useSelector((state) => state.products.products);
  const searchedResults = useSelector(
    (state) => state.products.searchedProducts
  );
  console.log("hello", !searchedResults.length);
  {
    !searchedResults.length
      ? (products = Allproducts)
      : (products = searchedResults);
  }
  console.log("searchedResults", searchedResults);
  console.log("products", products);

  useEffect(() => {
    dispatch(getProduct(page, products));
  }, [page, dispatch]);

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

    if (scrollTop + clientHeight >= scrollHeight - 1) {
      scrollToEnd();
    }
  };
  const priceFilteredProducts = products.filter(
    (product) => product.price > priceRange[0] && product.price < priceRange[1]
  );
  products = priceFilteredProducts;

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
  console.log("priceRange", priceRange[0], priceRange[1]);

  return !products.length ? (
    <div className="mainContainer">
      <Grid container>
        <Filter
          Filters={Filters}
          setFilters={setFilters}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
        <div>
          {!searchedResults.length && !Allproducts.length ? (
            <h4>Loading...</h4>
          ) : (
            <h4>No items to display..</h4>
          )}
        </div>
      </Grid>
    </div>
  ) : (
    <div className="mainContainer">
      <Grid container>
        <Filter
          Filters={Filters}
          setFilters={setFilters}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
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
