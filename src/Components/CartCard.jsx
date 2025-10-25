import React from "react";
import QuantityCounter from "./QuantityCounter";
/* this component displays the image of the product, the price, quantity, and the subtotal of all the products in the cart*/
export default function CartCard({ item, updateCartQuantity, removeFromCart }) {
  const subtotal = (parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2);/* the formula used to calculate subtotals*/

  /*returns all the required information in the order that i want it to be displayed */
  return (
    <div className="CartCard">
      <img src={item.image} alt={item.productName} />
      <div className="CartCardInfo">
        <h4>{item.productName}</h4>
        <p>Price: {item.price}</p>
        <QuantityCounter
          quantity={item.quantity}
          setQuantity={(qty) => updateCartQuantity(item.id, qty)}
          min={1}
        />
        <p>Subtotal: ${subtotal}</p>
        <button className="RemoveButton" onClick={() => removeFromCart(item.id)}> 
          Remove Item
        </button> 
      </div>
    </div>
  );
}
/* Adds a button at the bottom that calls removeFromCart to remove all items in the cart */