import React, { useEffect } from "react";
import { Grid, CircularProgress, Container, Box } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product/Product";
import Filter from "./HomepageFilter";
import Banner from "./Banner/Banner";
import { getProduct } from "../actions/products";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
  },
  filterContainer: {
    padding: theme.spacing(2),
  },
  productGrid: {
    padding: theme.spacing(2),
  },
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const [priceRange, setPriceRange] = React.useState([7, 2200]);
  const [Filters, setFilters] = React.useState({
    brandFilter: [],
    categoryFilter: [],
    colorFilter: [],
  });
  const [page, setPage] = React.useState(1);
  const dispatch = useDispatch();

  const { products: Allproducts, searchedProducts } = useSelector((state) => state.products);
  const products = searchedProducts.length ? searchedProducts : Allproducts;

  useEffect(() => {
    dispatch(getProduct(page, products));
  }, [page, dispatch, products]);

  const scrollToEnd = () => {
    setPage((prevPage) => prevPage + 1);
  };

  window.onscroll = function () {
    const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 1) {
      scrollToEnd();
    }
  };

  const priceFilteredProducts = products.filter(
    (product) => product.price > priceRange[0] && product.price < priceRange[1]
  );

  let filteredProducts = priceFilteredProducts;

  if (
    Filters.brandFilter.length ||
    Filters.colorFilter.length ||
    Filters.categoryFilter.length
  ) {
    const AllFiteredProduct = [];
    for (let i = 0; i < priceFilteredProducts.length; i++) {
      if (
        Filters.brandFilter.includes(priceFilteredProducts[i].brand) ||
        Filters.colorFilter.includes(priceFilteredProducts[i].color) ||
        priceFilteredProducts[i].category.some((cat) =>
          Filters.categoryFilter.includes(cat)
        )
      ) {
        AllFiteredProduct.push(priceFilteredProducts[i]);
      }
    }
    filteredProducts = [...new Set(AllFiteredProduct)];
  }

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Banner />
      <Grid container>
        <Grid item xs={12} md={3} className={classes.filterContainer}>
          <Filter
            Filters={Filters}
            setFilters={setFilters}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={2} className={classes.productGrid}>
            {!products.length ? (
              <Box className={classes.loader}>
                <CircularProgress />
              </Box>
            ) : (
              filteredProducts.map((product) => (
                <Grid key={product._id} item xs={12} sm={6} md={4}>
                  <Product product={product} />
                </Grid>
              ))
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
