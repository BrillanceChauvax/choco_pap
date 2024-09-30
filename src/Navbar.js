import React, { useState, useEffect } from "react";
import './Navbar.css';
import cartImage from './cart.svg';
import logo from './logo.png';

const Navbar = () => {
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
            <img src={logo} alt="Logo Choco Pap" title="Choco Pap"/>
        </div>

        {!isMobile && (
          <ul className="navbar-links">
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Boutique</a></li>
            <li><a href="#">
              <img src={cartImage} alt="Panier" className="cart-image" />
            </a></li>
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
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Boutique</a></li>
            <li><a href="#" className="cart-icon">Panier
              <img src={cartImage} alt="Panier" className="cart-image" />
              
            </a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
