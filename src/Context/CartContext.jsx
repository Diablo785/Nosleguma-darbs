import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(cartItem => 
      cartItem.event.title === item.event.title && 
      cartItem.ticketType === item.ticketType
    );
    
    if (existingItemIndex > -1) {
      // Item already exists in the cart
      const updatedItems = [...cartItems];
      const existingItem = updatedItems[existingItemIndex];
      updatedItems[existingItemIndex] = {
        ...existingItem,
        quantity: existingItem.quantity + item.quantity
      };
      setCartItems(updatedItems);
    } else {
      // Item does not exist in the cart
      setCartItems([...cartItems, item]);
    }
  };

  const removeFromCart = (index) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
  };

  const updateItemQuantity = (index, quantityChange) => {
    const updatedItems = [...cartItems];
    const item = updatedItems[index];
    const newQuantity = item.quantity + quantityChange;

    if (newQuantity <= 0) {
      // Remove item if quantity is 0 or less
      updatedItems.splice(index, 1);
    } else {
      // Update item quantity
      updatedItems[index] = { ...item, quantity: newQuantity };
    }
    
    setCartItems(updatedItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
