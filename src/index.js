import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './composants/boutique/PageProduit.js';
import { CartProvider } from './composants/boutique/CartContext.js';
import CartPopup from './composants/boutique/CartPopup.js';
import './index.css';
import Footer from './composants/footer/Footer.js';
import reportWebVitals from './reportWebVitals';
import Navbar from './composants/header/Navbar.js';
import Carousel from './composants/caroussel/Caroussel.js';
import Boutique from './composants/boutique/Boutique.js';

const App = () => {
  // Gérer l'état du pop-up du panier
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <Navbar onCartClick={toggleCart} />
      <Routes>
        <Route path="/" element={<Carousel />} />
        <Route path="/boutique" element={<Boutique />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
      <Footer />
      <CartPopup isOpen={isCartOpen} onClose={toggleCart} />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <Router>
        <App />
      </Router>
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();
