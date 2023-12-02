import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  // State to manage the items in the cart
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  // Internal CSS styles
  const navbarStyle = {
    background: '#FF0000',
    padding: '30px',
    borderBottom: '2px solid white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '10vh',
    width: '100vw', // Use 100vw to make it full width
  };

  const brandStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '3.5rem',
  };

  const navListStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '80px',
    fontSize: '1rem',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <nav className="navbar" style={navbarStyle}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" style={brandStyle}>
          KFC 
        </Link><bold>Mukono Branch</bold>

        <ul className="navbar-nav" style={navListStyle}>
          <li className="nav-item">
            <Link to="/about-us" className="nav-link" style={linkStyle}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" style={linkStyle}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link" style={linkStyle}>
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/menu" className="nav-link" style={linkStyle}>
              Our Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link" style={linkStyle}>
              <FaShoppingCart /> {cartItems.length > 0 && <span>({cartItems.length})</span>}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
