
import React, { createContext, useState, useMemo } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (game) => {
    setCart([...cart, game]);
  };

  const handleRemoveFromCart = (pos) => {
    setCart(cart.filter((obj, posObj) => posObj !== pos));
  };

  const contextValue = useMemo(() => {
    return { cart, handleAddToCart, handleRemoveFromCart };
  }, [cart]); // Certifique-se de incluir todas as dependências relevantes aqui

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};
