import React from "react";
import { useCart } from "../contexts/CartContext"; // Import the context hook
import { useOrders } from "../contexts/OrderContext"; // Import orders context

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart(); // Access cart data, removeFromCart, and clearCart function
  const { addToOrders } = useOrders(); // Access addToOrders function

  const handlePlaceOrder = () => {
    if (cart.length > 0) {
      addToOrders(cart); // Add cart items to orders
      clearCart(); // Clear the cart after placing the order
      alert("Your order has been placed successfully!");
    } else {
      alert("Your cart is empty. Add items to place an order.");
    }
  };

  return (
    <div>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1 style={{ fontSize: "24px", marginBottom: "20px", color: "#333" }}>Your Cart</h1>
        {cart.length === 0 ? (
          <p style={{ fontSize: "18px", color: "#555" }}>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((product) => (
              <div
                key={product.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #ddd",
                  padding: "15px",
                  marginBottom: "15px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#fff",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "80px",
                    height: "auto",
                    marginRight: "20px",
                    borderRadius: "5px",
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: "20px", margin: "0 0 10px" }}>{product.name}</h3>
                  <p style={{ fontSize: "16px", margin: "0 0 5px" }}>Price: ${product.price}</p>
                  <p style={{ fontSize: "16px", margin: "0 0 10px" }}>Quantity: {product.quantity}</p>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    style={{
                      padding: "10px 15px",
                      backgroundColor: "#ff4d4d",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontSize: "14px",
                    }}
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            ))}
            <button
              onClick={handlePlaceOrder}
              style={{
                marginTop: "20px",
                padding: "15px",
                backgroundColor: "#28a745",
                color: "#fff",
                fontSize: "16px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                width: "100%",
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontWeight: "bold",
              }}
            >
              Place Order
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
