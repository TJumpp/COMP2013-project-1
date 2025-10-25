import React, { useState } from "react";
import products from "../data/products";
import NavBar from "./NavBar";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";

export default function GroceriesAppContainer() {
  //creates a variable cart to hold your items and a function setCart to update it when things change.
  const [cart, setCart] = useState([]);

  //adds items to the cart 
  const addToCart = (product, quantity) => {
    if (quantity <= 0) {
      alert ("Please enter a quantity greater than 0");
      return;
    }
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  //updates the cart quantity
  const updateCartQuantity = (productId, quantity) => {
    if (quantity <= 1) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // lets you remove items from carr
  const removeFromCart = (productId) =>
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));

  // this is to empty the cart from the button
  const emptyCart = () => setCart([]);

  return ( //displays the main page in the format that i like
    <div><NavBar cartCount={cart.length} />
    <div className="GroceriesApp-Container">
      <ProductsContainer products={products} addToCart={addToCart} />
      <CartContainer
        cart={cart}
        updateCartQuantity={updateCartQuantity}
        removeFromCart={removeFromCart}
        emptyCart={emptyCart}
      />
    </div>
  </div>
  );
}
