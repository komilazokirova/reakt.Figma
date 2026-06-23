import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  const addToWishlist = () => {
    setWishlistCount((prev) => prev + 1);
  };

  return (
    <CartContext.Provider value={{ cartCount, wishlistCount, addToCart, addToWishlist }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);