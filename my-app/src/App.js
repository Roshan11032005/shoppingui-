import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Home from "./pages/Home";
import Cart from "./pages/Cart"; // Import your Cart component
import Order from "./pages/Order"; // Import your Order component
import { CartProvider } from "./contexts/CartContext";
import { OrdersProvider } from "./contexts/OrderContext"; // Import the OrdersProvider

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <CartProvider>
        <OrdersProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={<Order />} />
            </Routes>
          </Router>
        </OrdersProvider>
      </CartProvider>
    </DndProvider>
  );
}

export default App;
