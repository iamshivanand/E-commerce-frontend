import React from "react";
import "../../styles/Product.css";

function Product({ product }) {
  return (
    <div className="productContainer">
      <div className="imageContainer">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="productDescription">
        <h3>{product.title}</h3>
        <h5>Likes:{product.likeCount}</h5>
        <h5>Price:{product.price}</h5>
      </div>
    </div>
  );
}

export default Product;
