import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Initialiser directement avec les données du localStorage
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Sauvegarder dans localStorage à chaque mise à jour
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const onAddToCart = (product, quantity) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += quantity;
      setCartItems([...cartItems]); // Mettre à jour les items
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  const onRemoveFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const onClearCart = () => {
    setCartItems([]);
  };

  const onUpdateQuantity = (id, quantity) => {
    if (quantity < 1) return; // Empêcher les quantités négatives
    const updatedItems = cartItems.map(item => 
      item.id === id ? { ...item, quantity: parseInt(quantity, 10) } : item
    );
    setCartItems(updatedItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, onAddToCart, onRemoveFromCart, onClearCart, onUpdateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
