import React, { useEffect, useRef } from "react";
import Cards from "./Cards";

const Shop = ({ products, cartProducts, setCartProducts }) => {
  return (
    <div className="p-5 bg-light text-center">
      <h1 className="text-secondary mb-3">Shop</h1>
      <div className="container">
        <div className="row gap-4 justify-content-center align-items-center">
          {products.map((product) => (
            <Cards
              key={product.id}
              product={product}
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
