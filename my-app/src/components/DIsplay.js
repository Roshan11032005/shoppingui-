import React, { useState } from "react";
import iphoneSalesData from "../Data"; // Adjust path as needed
import { useCart } from "../contexts/CartContext"; // Import the context hook
import { useDrag, useDrop } from "react-dnd"; // Import necessary hooks from react-dnd

const ItemType = "ITEM"; // Define a constant for the item type

const DraggableItem = ({ product, quantity, handleQuantityChange, handleAddToCart }) => {
  // Drag and drop functionality for each product
  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: product,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: ItemType,
    drop: () => handleAddToCart(product), // Add product to cart when dropped
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        ...styles.card,
        opacity: isDragging ? 0.5 : 1,
        border: isOver ? "2px dashed #007bff" : "1px solid #ccc",
      }}
    >
      <div ref={drag} style={styles.cardContent}>
        <img
          src={product.image}
          alt={product.name}
          style={styles.image}
        />
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>Quantity Available: {product.quantity}</p>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
          style={styles.quantityInput}
        />
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
  const [quantity, setQuantity] = useState(1); // Default quantity set to 1
  const { addToCart } = useCart(); // Access the addToCart function

  const handleAddToCart = (product) => {
    addToCart(product, quantity); // Add the product with the selected quantity
    alert(`${product.name} (Quantity: ${quantity}) added to cart!`);
  };

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  return (
    <div>
      {/* Instructions for the drag-and-drop feature */}
      <div style={styles.instructions}>
        <h2>How to Use:</h2>
        <p>1. Drag a product card to the cart drop area to add it.</p>
        <p>2. Adjust the quantity before adding the product to the cart.</p>
        <p>3. Alternatively, click the "Add to Cart" button to add the product directly.</p>
        <p>
          4. While dragging, the product card will appear semi-transparent, and the cart
          area will highlight.
        </p>
      </div>

      {/* Render product cards */}
      <div style={styles.container}>
        {iphoneSalesData.map((product) => (
          <DraggableItem
            key={product.id}
            product={product}
            quantity={quantity}
            handleQuantityChange={handleQuantityChange}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  instructions: {
    textAlign: "center",
    marginBottom: "20px",
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    fontSize: "16px",
    lineHeight: "1.5",
    color: "#333",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    padding: "20px",
    gap: "20px",
    flexWrap: "wrap",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "15px",
    textAlign: "center",
    width: "200px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.3s",
  },
  cardContent: {
    cursor: "move",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  addButton: {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
    transition: "background-color 0.3s, transform 0.2s",
  },
  addButtonHover: {
    backgroundColor: "#0056b3",
    transform: "scale(1.05)",
  },
  quantityInput: {
    marginTop: "10px",
    padding: "5px",
    width: "60px",
    textAlign: "center",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
};

export default IphoneSales;
