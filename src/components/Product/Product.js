import React from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "auto",
    transition: "0.3s",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    },
  },
  media: {
    height: 200,
    objectFit: "contain",
  },
});

const Product = ({ product }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.image}
          title={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {product.title}
          </Typography>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="body2" color="textSecondary" component="p">
              Likes: {product.likeCount}
            </Typography>
            <Typography variant="h6" color="primary">
              ${product.price}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Product;
