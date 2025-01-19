import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Home from "./pages/Home"; // Import your Home component
import Cart from "./pages/Cart"; // Import your Cart component
import Order from "./pages/Order"; // Import your Order component
import { CartProvider } from "./contexts/CartContext";
import { OrdersProvider } from "./contexts/OrderContext"; // Import the OrdersProvider

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <CartProvider>
        <OrdersProvider>
          <div style={styles.appContainer}>
            {/* Home Section - Span both top blocks */}
            <div style={{ ...styles.section, ...styles.homeSection }}>
              <h2>Home</h2>
              <Home />
            </div>
            
            {/* Cart Section */}
            <div style={{ ...styles.section, ...styles.cartSection }}>
              <h2>Cart</h2>
              <Cart />
            </div>
            
            {/* Orders Section */}
            <div style={{ ...styles.section, ...styles.orderSection }}>
              <h2>Orders</h2>
              <Order />
            </div>
          </div>
        </OrdersProvider>
      </CartProvider>
    </DndProvider>
  );
}

const styles = {
  appContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr", // Two columns
    gridTemplateRows: "1fr 1fr",    // Two rows
    gap: "10px",
    height: "100vh",
    padding: "10px",
    boxSizing: "border-box",
  },
  section: {
    padding: "20px",
    overflow: "auto",
    textAlign: "center",
    borderRadius: "8px",
  },
  homeSection: {
    gridColumn: "1 / span 2", // Spans across both columns
    gridRow: "1",             // Stays in the first row
    border: "2px solid blue", // Border color for Home section
  },
  cartSection: {
    border: "2px solid green", // Border color for Cart section
  },
  orderSection: {
    border: "2px solid red",   // Border color for Order section
  },
};

export default App;
