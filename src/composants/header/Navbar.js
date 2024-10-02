import React, { useState, useEffect, useContext } from "react";
import './Navbar.css';
import cartImage from '../img/cart.svg';
import logo from '../img/logo.png';
import { CartContext } from '../boutique/CartContext.js';
import { Link } from 'react-router-dom';

const Navbar = ({ onCartClick }) => {
  const { cartItems } = useContext(CartContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
    if (window.innerWidth > 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo Choco Pap" title="Choco Pap" />
        </div>

        {!isMobile && (
          <ul className="navbar-links">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/boutique">Boutique</Link></li>
            <li>
              <button onClick={onCartClick} className="cart-icon">
                {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
                <img src={cartImage} alt="Panier" className="cart-image" />
              </button>
            </li>
          </ul>
        )}

        {isMobile && (
          <div className="burger-menu" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </nav>

      {isMobile && menuOpen && (
        <div className="mobile-menu active">
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/boutique">Boutique</Link></li>
            <li>
              <button onClick={onCartClick} className="cart-icon">
                <p className="mobile-panier">Panier</p>
                {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
                <img src={cartImage} alt="Panier" className="cart-image" />
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
