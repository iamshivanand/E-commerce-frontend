import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import "../styles/Navbar.css";
import { Button, Grid, Menu, MenuItem } from "@material-ui/core";

function Navbar({ handleAddProduct }) {
  const [anchorEl, setAnchorEl] = React.useState(null);


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
  
  return (
    <Grid item >
      <div className="bar">
        <div className="logo">
          <span>E-commerce</span>
        </div>
        <div className="search-box">
          <input type="text" id="search-text" name="searchText" />
          <button className="search-button">
            <SearchIcon />
          </button>
        </div>
        <div className="user-name">
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <AccountCircleIcon style={{ color: "white",fontSize: 40  }} />
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
          <ShoppingCartOutlinedIcon style={{ fontSize: 40 }}/>
          <span className="cart-count">1</span>
        </div>
      </div>
    </Grid>
  );
}

export default Navbar;
