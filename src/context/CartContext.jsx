import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    setCartItems((prevState) => [...prevState, item]);
  }

  function removeFromCart(itemId) {
    const indexToRemove = cartItems.findIndex(item => item.id === itemId);
    if (indexToRemove !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(indexToRemove, 1);
      setCartItems(updatedCartItems);
    }
  }

  function clearCart() {
    setCartItems([]);
  }

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <CartContext.Provider value={{ cartItems, totalAmount, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
