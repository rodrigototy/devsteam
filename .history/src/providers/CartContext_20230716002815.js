// src/providers/CartContext.js
import React, { createContext, useState, useMemo, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [idCounter, setIdCounter] = useState(0); // Variável auto incrementada

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    const storedIdCounter = localStorage.getItem('idCounter');

    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }

    if (storedIdCounter) {
      setIdCounter(Number(storedIdCounter));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(localStorage.getItem('cart'));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('idCounter', idCounter.toString());
    console.log(localStorage.getItem('idCounter'));
  }, [idCounter]);

  const handleAddToCart = (game) => {
    const newGame = { ...game, id: idCounter }; // Adiciona o ID ao game
    setIdCounter(idCounter + 1); // Incrementa o contador de ID
    setCart([...cart, newGame]);
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((game) => game.id !== id));
  };

  const contextValue = useMemo(() => {
    return { cart, handleAddToCart, handleRemoveFromCart };
  }, [cart]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};
