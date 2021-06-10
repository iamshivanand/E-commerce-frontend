import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";

import { useSelector } from "react-redux";

import Product from "./Product/Product";
import Filter from "./HomepageFilter";

function HomePage() {
  // const [brandFilter, setBrandFilters] = React.useState([]);
  // const [categoryFilter, setCategoryFilters] = React.useState([]);
  // const [colorFilter, setColorFilters] = React.useState([]);
  const [Filters, setFilters] = React.useState({
    brandFilter: [],
    categoryFilter: [],
    colorFilter: [],
  });
  const products = useSelector((state) => state.products);
  console.log("state", products);
  console.log("Filters", Filters);
  const hello = Filters.brandFilter.map((filter) => {
    let Products = products.filter((product) => product.brand === filter);

    return Products;
  });
  console.log("Hello", hello);

  return !products.length ? (
    <CircularProgress />
  ) : (
    <div className="mainContainer">
      <Grid container>
        <Filter Filters={Filters} setFilters={setFilters} />
        <Grid item xs={12} sm={12} md={8}>
          {products.map((product) => (
            <Grid key={product._id} item xs={12}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
