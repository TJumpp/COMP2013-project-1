import React from "react";
//function that increments and decrements by 1
export default function QuantityCounter({ quantity, setQuantity}) {
  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  //adds the buttons for + and - in quantities
  return (
    <div className="counter-container">
      <button className="counter-button" onClick={decrement}>-</button>
      <span>{quantity}</span>
      <button className="counter-button" onClick={increment}>+</button>
    </div>
  );
}

