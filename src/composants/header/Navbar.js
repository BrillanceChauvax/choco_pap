import React, { useState, useEffect } from "react";
import './Navbar.css';
import cartImage from '../img/cart.svg';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';

const Navbar = ({ onCartClick }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  // Gérer le redimensionnement de la fenêtre
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsMobile(false);
      setMenuOpen(false); // Fermer le menu si on passe en mode desktop
    } else {
      setIsMobile(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // Appeler la fonction au chargement

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
            <li><button onClick={onCartClick} className="cart-icon">
              <img src={cartImage} alt="Panier" className="cart-image" />
            </button></li>
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

      {isMobile && (
        <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/boutique">Boutique</a></li>
            <li>
              <button onClick={onCartClick} className="cart-icon">
                Panier
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
