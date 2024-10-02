import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './composants/boutique/PageProduit.js';
import { CartProvider } from './composants/boutique/CartContext.js';
import './index.css';
import Footer from './composants/footer/Footer.js';
import reportWebVitals from './reportWebVitals';
import Navbar from './composants/header/Navbar.js';
import Carousel from './composants/caroussel/Caroussel.js';
import Boutique from './composants/boutique/Boutique.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
