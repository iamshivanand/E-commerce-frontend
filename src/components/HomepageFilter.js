import React from "react";
import {
  Grid,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Collapse,
  makeStyles,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
  Slider,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

//styles for material ui of this page
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));
function HomepageFilter({ Filters, setFilters }) {
  const { brandFilter, categoryFilter, colorFilter } = Filters;
  const classes = useStyles();
  const [categoryOpen, setCategoryOpen] = React.useState(false);

  const [priceOpen, setPriceOpen] = React.useState(false);
  const [priceRange, setPriceRange] = React.useState([7, 2200]);

  const [brandOpen, setBrandOpen] = React.useState(false);
  const [colorOpen, setColorOpen] = React.useState(false);

  const [checkedCategories, setCheckedCategories] = React.useState({
    kids: false,
    men: false,
    shoes: false,
    jeans: false,
    "T-shirt": false,
    clothing: false,
    jacket: false,
    jewelry: false,
    women: false,
    electronics: false,
    raincoat: false,
    top: false,
  });
  const [checkedBrands, setCheckedBrands] = React.useState({
    addidas: false,
    bewakoof: false,
    biylaclesen: false,
    "calvin klein": false,
    pantaloons: false,
    wrogn: false,
    sparx: false,
    puma: false,
    roadster: false,
    google: false,
    nike: false,
    tanishq: false,
    dell: false,
    sandisk: false,
    wd: false,
    acer: false,
    samsung: false,
    "lock and love": false,
    woodland: false,
    mbj: false,
    opna: false,
    danvouy: false,
  });
  const [checkedColor, setCheckedColor] = React.useState({
    grey: false,
    white: false,
    black: false,
    blue: false,
    yellow: false,
    brown: false,
    silver: false,
    gold: false,
    red: false,
    purple: false,
  });

  const handleCategory = () => {
    setCategoryOpen(!categoryOpen);
  };

  const handlePrice = () => {
    setPriceOpen(!priceOpen);
  };
  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };
  const handleBrand = () => {
    setBrandOpen(!brandOpen);
  };
  const handleColor = () => {
    setColorOpen(!colorOpen);
  };

  const toggleCategorycheck = (e) => {
    setCheckedCategories({
      ...checkedCategories,
      [e.target.value]: e.target.checked,
    });
    let name = e.target.value;
    if (e.target.checked) {
      let FiltersApplied = addFilters(categoryFilter, name);
      setFilters({ ...Filters, categoryFilter: FiltersApplied });
    } else {
      let FiltersApplied = removeFilters(categoryFilter, name);
      setFilters({ ...Filters, categoryFilter: FiltersApplied });
    }
  };
  const toggleBrandcheck = (e) => {
    setCheckedBrands({
      ...checkedBrands,
      [e.target.value]: e.target.checked,
    });
    let name = e.target.value;
    if (e.target.checked) {
      let FiltersApplied = addFilters(brandFilter, name);
      setFilters({ ...Filters, brandFilter: FiltersApplied });
    } else {
      let FiltersApplied = removeFilters(brandFilter, name);
      setFilters({ ...Filters, brandFilter: FiltersApplied });
    }
  };
  const toggleColorcheck = (e) => {
    setCheckedColor({
      ...checkedColor,
      [e.target.value]: e.target.checked,
    });
    let name = e.target.value;
    if (e.target.checked) {
      let FiltersApplied = addFilters(colorFilter, name);
      setFilters({ ...Filters, colorFilter: FiltersApplied });
    } else {
      let FiltersApplied = removeFilters(colorFilter, name);
      setFilters({ ...Filters, colorFilter: FiltersApplied });
    }
  };

  const addFilters = (Filters, name) => {
    let data = Filters;
    data.push(name);
    return data;
  };

  const removeFilters = (Filters, name) => {
    let data = Filters;
    data = data.filter((filter) => filter !== name);
    return data;
  };
  //   console.log("Filters", brandFilter, categoryFilter, colorFilter);
  return (
    <Hidden smDown xsDown>
      <Grid item md={3}>
        <h3>Filters</h3>
        <div className="categories">
          <ListItem button onClick={handleCategory}>
            <ListItemText primary="Category" />
            {categoryOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={categoryOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding className={classes.nested}>
              <FormGroup
                aria-label="position"
                column="true"
                onChange={(e) => toggleCategorycheck(e)}
              >
                <FormControlLabel
                  value="kids"
                  control={<Checkbox color="primary" />}
                  label="Kids"
                />
                <FormControlLabel
                  value="men"
                  control={<Checkbox color="primary" />}
                  label="Men"
                />
                <FormControlLabel
                  value="shoes"
                  control={<Checkbox color="primary" />}
                  label="Shoes"
                />
                <FormControlLabel
                  value="jeans"
                  control={<Checkbox color="primary" />}
                  label="Jeans"
                />
                <FormControlLabel
                  value="T-shirt"
                  control={<Checkbox color="primary" />}
                  label="T-Shirt"
                />
                <FormControlLabel
                  value="clothing"
                  control={<Checkbox color="primary" />}
                  label="Clothing"
                />
                <FormControlLabel
                  value="jacket"
                  control={<Checkbox color="primary" />}
                  label="Jacket"
                />
                <FormControlLabel
                  value="jewelery"
                  control={<Checkbox color="primary" />}
                  label="Jewelery"
                />
                <FormControlLabel
                  value="women"
                  control={<Checkbox color="primary" />}
                  label="Women"
                />
                <FormControlLabel
                  value="electronics"
                  control={<Checkbox color="primary" value="electronics" />}
                  label="Electronics"
                />
                <FormControlLabel
                  value="raincoat"
                  control={<Checkbox color="primary" />}
                  label="Raincoat"
                />
                <FormControlLabel
                  value="top"
                  control={<Checkbox color="primary" />}
                  label="Top"
                />
              </FormGroup>
            </List>
          </Collapse>
        </div>
        <div className="price">
          <ListItem button onClick={handlePrice}>
            <ListItemText primary="Price" />
            {priceOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={priceOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding className={classes.nested}>
              <Typography id="range-slider" gutterBottom>
                Price range
              </Typography>
              <Slider
                value={priceRange}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={10}
                max={2500}
              />
            </List>
          </Collapse>
        </div>

        <div className="brand">
          <ListItem button onClick={handleBrand}>
            <ListItemText primary="Brand" />
            {brandOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={brandOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding className={classes.nested}>
              <FormGroup
                aria-label="position"
                column="true"
                onChange={(e) => toggleBrandcheck(e)}
              >
                <FormControlLabel
                  value="addidas"
                  control={<Checkbox color="primary" />}
                  label="addidas"
                />
                <FormControlLabel
                  value="bewakoof"
                  control={<Checkbox color="primary" />}
                  label="bewakoof"
                />
                <FormControlLabel
                  value="biylaclesen"
                  control={<Checkbox color="primary" />}
                  label="biylaclesen"
                />
                <FormControlLabel
                  value="calvin klein"
                  control={<Checkbox color="primary" />}
                  label="calvin klein"
                />
                <FormControlLabel
                  value="pantaloons"
                  control={<Checkbox color="primary" />}
                  label="pantaloons"
                />
                <FormControlLabel
                  value="wrogn"
                  control={<Checkbox color="primary" />}
                  label="wrogn"
                />
                <FormControlLabel
                  value="sparx"
                  control={<Checkbox color="primary" />}
                  label="sparx"
                />
                <FormControlLabel
                  value="puma"
                  control={<Checkbox color="primary" />}
                  label="puma"
                />
                <FormControlLabel
                  value="roadster"
                  control={<Checkbox color="primary" />}
                  label="roadster"
                />
                <FormControlLabel
                  value="google"
                  control={<Checkbox color="primary" />}
                  label="google"
                />
                <FormControlLabel
                  value="nike"
                  control={<Checkbox color="primary" />}
                  label="nike"
                />
                <FormControlLabel
                  value="tanishq"
                  control={<Checkbox color="primary" />}
                  label="tanishq"
                />
                <FormControlLabel
                  value="dell"
                  control={<Checkbox color="primary" />}
                  label="dell"
                />
                <FormControlLabel
                  value="sandisk"
                  control={<Checkbox color="primary" />}
                  label="sandisk"
                />
                <FormControlLabel
                  value="wd"
                  control={<Checkbox color="primary" />}
                  label="wd"
                />
                <FormControlLabel
                  value="acer"
                  control={<Checkbox color="primary" />}
                  label="acer"
                />
                <FormControlLabel
                  value="samsung"
                  control={<Checkbox color="primary" />}
                  label="samsung"
                />
                <FormControlLabel
                  value="lock and love"
                  control={<Checkbox color="primary" />}
                  label="lock and love"
                />
                <FormControlLabel
                  value="woodland"
                  control={<Checkbox color="primary" />}
                  label="woodland"
                />
                <FormControlLabel
                  value="mbj"
                  control={<Checkbox color="primary" />}
                  label="mbj"
                />
                <FormControlLabel
                  value="opna"
                  control={<Checkbox color="primary" />}
                  label="opna"
                />
                <FormControlLabel
                  value="danvouy"
                  control={<Checkbox color="primary" />}
                  label="danvouy"
                />
              </FormGroup>
            </List>
          </Collapse>
        </div>
        <div className="color">
          <ListItem button onClick={handleColor}>
            <ListItemText primary="Color" />
            {colorOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={colorOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding className={classes.nested}>
              <FormGroup
                aria-label="position"
                column="true"
                onChange={(e) => toggleColorcheck(e)}
              >
                <FormControlLabel
                  value="grey"
                  control={<Checkbox color="primary" />}
                  label="grey"
                />
                <FormControlLabel
                  value="white"
                  control={<Checkbox color="primary" />}
                  label="white"
                />
                <FormControlLabel
                  value="black"
                  control={<Checkbox color="primary" />}
                  label="black"
                />
                <FormControlLabel
                  value="blue"
                  control={<Checkbox color="primary" />}
                  label="blue"
                />
                <FormControlLabel
                  value="yellow"
                  control={<Checkbox color="primary" />}
                  label="yellow"
                />
                <FormControlLabel
                  value="brown"
                  control={<Checkbox color="primary" />}
                  label="brown"
                />
                <FormControlLabel
                  value="silver"
                  control={<Checkbox color="primary" />}
                  label="silver"
                />
                <FormControlLabel
                  value="gold"
                  control={<Checkbox color="primary" />}
                  label="gold"
                />
                <FormControlLabel
                  value="red"
                  control={<Checkbox color="primary" />}
                  label="red"
                />
                <FormControlLabel
                  value="purple"
                  control={<Checkbox color="primary" />}
                  label="purple"
                />
              </FormGroup>
            </List>
          </Collapse>
        </div>
      </Grid>
    </Hidden>
  );
}

export default HomepageFilter;
