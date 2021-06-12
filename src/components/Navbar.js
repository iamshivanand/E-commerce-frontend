import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import "../styles/Navbar.css";
import { Button, Menu, MenuItem } from "@material-ui/core";

import { useDispatch } from "react-redux";
import { searchProducts } from "../actions/products";
import { Link, BrowserRouter } from "react-router-dom";
function Navbar({ handleAddProduct }) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [searchText, setSearchText] = React.useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const addProduct = () => {
    setAnchorEl(null);
    handleAddProduct();
  };
  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(searchProducts(searchText));
  };
  // const clear = () => {
  //   setSearchText("");
  // };

  return (
    <BrowserRouter>
      <div className="bar">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="logo">
            <span>E-commerce</span>
          </div>
        </Link>
        <div className="search-box">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input
              value={searchText}
              type="text"
              id="search-text"
              name="searchText"
              placeholder="search......"
              onChange={(e) => {
                handleSearch(e);
              }}
            />
            <button className="search-button">
              <SearchIcon />
            </button>
          </form>
        </div>
        <div className="user-name">
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <AccountCircleIcon style={{ color: "white", fontSize: 40 }} />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My Account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
            <MenuItem onClick={addProduct}>Add Product</MenuItem>
          </Menu>
        </div>
        <div className="cart-icon-container" style={{ color: "white" }}>
          <ShoppingCartOutlinedIcon style={{ fontSize: 40 }} />
          <span className="cart-count">1</span>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Navbar;
