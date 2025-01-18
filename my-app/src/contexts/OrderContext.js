import React, { createContext, useContext, useState } from "react";

// Create the OrdersContext
const OrdersContext = createContext();

// Custom hook to use the OrdersContext
export const useOrders = () => {
  return useContext(OrdersContext);
};

// OrdersProvider component to wrap the app
export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]); // State to hold the list of orders

  // Function to add orders
  const addToOrders = (cartItems) => {
    const newOrder = {
      id: new Date().getTime(), // Unique ID for the order
      items: cartItems,
      date: new Date().toLocaleString(), // Timestamp for the order
    };
    setOrders((prevOrders) => [...prevOrders, newOrder]);
  };

  // Value to provide to the context
  const value = {
    orders,
    addToOrders,
  };

  return (
    <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>
  );
};
