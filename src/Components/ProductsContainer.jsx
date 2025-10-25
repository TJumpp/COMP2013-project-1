import React from "react";
import ProductCard from "./ProductCard";
//renders all the data passed from the productCard parent component 
export default function ProductsContainer({ products, addToCart }) {
  return (
    <div className="ProductsContainer">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}
