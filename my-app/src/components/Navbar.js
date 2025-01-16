import React from "react";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <div className="navbar-logo">Shopping UI</div>
      </Link>
      <div className="navbar-cart">
        <Link to="/cart" data-count="3">
          <i className="fas fa-shopping-cart"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
