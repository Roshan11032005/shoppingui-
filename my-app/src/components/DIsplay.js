import React, { useState } from "react";
import iphoneSalesData from "../Data"; // Adjust path as needed
import { useCart } from "../contexts/CartContext"; // Import the context hook
import { useDrag, useDrop } from "react-dnd"; // Import necessary hooks from react-dnd

const ItemType = "ITEM"; // Define a constant for the item type

const DraggableItem = ({ product, handleAddToCart }) => {
  // Drag functionality for each product
  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: product,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        ...styles.card,
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <div style={styles.cardContent}>
        <img src={product.image} alt={product.name} style={styles.image} />
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>Quantity Available: {product.quantity}</p>
        <button
          onClick={() => handleAddToCart(product)}
          style={styles.addButton}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const IphoneSales = () => {
  const { addToCart, cart } = useCart(); // Access the addToCart function and cart state

  const handleAddToCart = (product) => {
    addToCart(product); // Add the product to the cart
    alert(`${product.name} added to cart!`);
  };

  // Drop functionality for the cart
  const [{ isOver }, drop] = useDrop({
    accept: ItemType,
    drop: (item) => handleAddToCart(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div style={styles.pageContainer}>
      {/* Products Section */}
      <div style={styles.productsSection}>
        <h2>Products</h2>
        <div style={styles.container}>
          {iphoneSalesData.map((product) => (
            <DraggableItem
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>

      {/* Cart Section */}
      <div
        ref={drop}
        style={{
          ...styles.cartSection,
          border: isOver ? "2px dashed #007bff" : "1px solid #ccc",
          backgroundColor: isOver ? "#f0f8ff" : "#f9f9f9",
        }}
      >
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Drag items here to add to your cart.</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} style={styles.cartItem}>
              <p>{item.name}</p>
             
            </div>
          ))
        )}
      </div>
    </div>
  );
};
const styles = {
  pageContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gap: "10px",
    height: "100vh",
    padding: "10px",
    boxSizing: "border-box",
  },
  section: {
    border: "1px solid #ccc",
    borderRadius: "6px",
    padding: "10px",
    overflow: "auto",
    textAlign: "center",
  },
  productsSection: {
    border: "1px solid #ccc",
    borderRadius: "6px",
    padding: "10px",
    textAlign: "center",
    fontSize: "12px", // Smaller font size for section
  },
  cartSection: {
    border: "1px solid #ccc",
    borderRadius: "6px",
    padding: "10px",
    textAlign: "center",
    fontSize: "12px", // Smaller font size for cart
    overflow: "auto",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "5px", // Smaller gap between items
    justifyContent: "center",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "8px",
    textAlign: "center",
    width: "100px", // Reduced width
    fontSize: "10px", // Smaller font size
  },
  cardContent: {
    cursor: "move",
  },
  image: {
    width: "80px", // Reduced width
    height: "auto",
    borderRadius: "4px",
  },
  cartItem: {
    margin: "5px 0",
    padding: "5px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "10px", // Smaller font size
    backgroundColor: "#f9f9f9",
  },
  addButton: {
    marginTop: "5px",
    padding: "5px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "10px", // Smaller font size
    cursor: "pointer",
  },
  quantityInput: {
    width: "50px", // Smaller input width
    padding: "3px",
    fontSize: "10px", // Smaller font size
    textAlign: "center",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginTop: "5px",
  },
};


export default IphoneSales;
