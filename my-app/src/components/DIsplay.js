import React from "react";
import iphoneSalesData from "../Data"; // Adjust path as needed

const IphoneSales = () => {
  return (
    <div style={styles.container}>
      {iphoneSalesData.map((product) => (
        <div key={product.id} style={styles.card}>
          <img
            src={product.image}
            alt={product.name}
            style={styles.image}
          />
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p>Quantity Available: {product.quantity}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    padding: "20px",
    gap: "20px",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "15px",
    textAlign: "center",
    width: "200px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
};

export default IphoneSales;
