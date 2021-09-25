import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, img, price, shipping, seller, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="product-details">
        <h4 className="product-name">{name} </h4>
        <p>
          <small>By: </small>
          {seller}
        </p>
        <p>Price: {price}</p>
        <p> only {stock} left in stock - order now</p>
        <p>Shipping:{shipping}</p>
        <button
          onClick={() => props.handleAddToCart(props.product)}
          className="btn-regular"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
