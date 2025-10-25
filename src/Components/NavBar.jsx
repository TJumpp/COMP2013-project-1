import React from "react";
import cartEmpty from "../assets/cart-empty.png";
import cartFull from "../assets/cart-full.png";

export default function NavBar({/*this is for the dynamic shopping cart image */ cartCount }) {
  //used to display the navbar at the top in the correct format
  return (
    <div className="NavBar">
      <div className="NavUser">Hello, username</div>
      <div className="NavTitle"><b>Groceries App</b> 🍎</div>
      <div className="NavCart">
        <img
          //checks if there is data in the cart, and chooses which image should be used
          src={cartCount > 0 ? cartFull : cartEmpty}
          alt="Shopping Cart"
          style={{ height: "40px" }}
        />
      </div>
    </div>
  );
}
