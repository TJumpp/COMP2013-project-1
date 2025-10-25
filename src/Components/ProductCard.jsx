import React, { useState } from "react";
import QuantityCounter from "./QuantityCounter";
//displays a card with all of the required elements 
function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="ProductCard">
      <img src={product.image} alt={product.productName} />
      <h3>{product.productName}</h3>
      <p>{product.brand}</p>
      <p>{product.quantity}</p>
      <p>{product.price}</p>
      <div className="ProductQuantityDiv">
        <QuantityCounter quantity={quantity} setQuantity={setQuantity} />
        <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
