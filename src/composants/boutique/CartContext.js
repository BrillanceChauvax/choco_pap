import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const onAddToCart = (product, quantity) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += quantity;
      setCartItems([...cartItems]);
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, onAddToCart }}>
      {children}
    </CartContext.Provider>
  );
};
