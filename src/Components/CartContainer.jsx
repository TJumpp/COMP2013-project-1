import React from "react";
import CartCard from "./CartCard";
/* this will render the list of items chosen by the user, and if empty it will show no items in the cart*/
export default function CartContainer({ cart, updateCartQuantity, removeFromCart, emptyCart }) {
  if (cart.length === 0) return <p>No items in the cart.</p>; /* this is for if nothing is in the cart */

  // calculated the total price of the items
  const totalPrice = cart.reduce((accumulator, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return accumulator + price * item.quantity;
  }, 0);

  // returns the information of the items in the cart for it to be displayed
  return (
    <div className="CartContainer">
      {cart.map((item) => (
        <CartCard
          key={item.id}
          item={item}
          updateCartQuantity={updateCartQuantity}
          removeFromCart={removeFromCart}
        />
      ))}
      <div className="CartListBtns">
        <p>Total: ${totalPrice.toFixed(2)}</p>
        <button className="RemoveButton" onClick={emptyCart}>Empty Cart</button>
        <button id="BuyButton">Buy</button>
      </div>
    </div>
  );
}
