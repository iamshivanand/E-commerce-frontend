import React from "react";
import { AppBar, Toolbar, Typography, InputBase, Badge, Avatar, Box } from "@material-ui/core";
import { Search, ShoppingCartOutlined, AccountCircle } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { searchProducts } from "../actions/products";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.25)",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const Navbar = ({ handleAddProduct }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [searchText, setSearchText] = React.useState("");

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(searchProducts(searchText));
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            E-commerce
          </Link>
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <Search />
          </div>
          <form onSubmit={handleSubmit}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              value={searchText}
              onChange={handleSearch}
            />
          </form>
        </div>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          <Box mr={2}>
            <Badge badgeContent={1} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </Box>
          <Avatar>
            <AccountCircle />
          </Avatar>
        </div>
        <div className={classes.sectionMobile}>
          <Badge badgeContent={1} color="secondary">
            <ShoppingCartOutlined />
          </Badge>
          <Avatar>
            <AccountCircle />
          </Avatar>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
