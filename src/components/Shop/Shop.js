import React, { useEffect, useState } from "react";
import "./Shop.css";
const Shop = () => {
  return (
    <div className="shop-container">
      <div className="product-container">
        <h2>Products:</h2>
      </div>
      <div className="cart-container">
        <h3>Order Summery</h3>
        <h5>Items Ordered: </h5>
      </div>
    </div>
  );
};

export default Shop;
