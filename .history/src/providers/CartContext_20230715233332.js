//  src/providers/CartContext.js
import React, { createContext, useState, useMemo } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [idCounter, setIdCounter] = useState(0); // Variável auto incrementada

  const handleAddToCart = (game) => {
    const newGame = { ...game, id: idCounter }; // Adiciona o ID ao game
    setIdCounter(idCounter + 1); // Incrementa o contador de ID
    setCart([...cart, newGame]);
  };

  const handleRemoveFromCart = (id) => {
    
    setCart(cart.filter((obj, idItem) => idItem !== id));
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
