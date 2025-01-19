import React, { useState } from "react";
import { useOrders } from "../contexts/OrderContext";

const Order = () => {
  const { orders } = useOrders(); // Fetch the list of orders from the context
  const [expandedOrder, setExpandedOrder] = useState(null); // State to track which order is expanded

  // Function to toggle the visibility of order details (expand/collapse)
  const handleToggle = (orderId) => {
    // If the clicked order is already expanded, collapse it; otherwise, expand it
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  // Inline styles for the components
  const styles = {
    container: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      textAlign: 'center',
      color: '#333',
    },
    orderCard: {
      border: '1px solid #ddd',
      margin: '10px 0',
      padding: '15px',
      borderRadius: '8px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    orderTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#555',
      cursor: 'pointer', // Makes the order title clickable
    },
    orderDetails: {
      color: '#777',
    },
    list: {
      listStyleType: 'none', // Removes the default list bullet points
      paddingLeft: '0',
    },
    listItem: {
      padding: '5px 0',
    },
    infoText: {
      fontSize: '16px',
      color: '#444',
      marginBottom: '20px',
      backgroundColor: '#f9f9f9',
      padding: '15px',
      borderRadius: '8px',
      border: '1px solid #ddd',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Order Summary</h1>

      

      {/* Check if there are any orders */}
      {orders.length === 0 ? (
        <p>No orders placed yet.</p> // Display if no orders exist
      ) : (
        orders.map((order) => (
          <div key={order.id} style={styles.orderCard}>
            {/* Title of the order, clickable to expand or collapse */}
            <h3
              style={styles.orderTitle}
              onClick={() => handleToggle(order.id)} // Trigger the toggle function when clicked
            >
              Order #{order.id}
            </h3>
            <p style={styles.orderDetails}>Date: {order.date}</p>

            {/* Only display order items if this order is expanded */}
            {expandedOrder === order.id && (
              <ul style={styles.list}>
                {/* Loop through the items in the order */}
                {order.items.map((item) => (
                  <li key={item.id} style={styles.listItem}>
                    {item.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Order;
