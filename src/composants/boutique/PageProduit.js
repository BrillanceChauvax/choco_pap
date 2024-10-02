import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import productsData from './products.json';
import './PageProduit.css';
import { CartContext } from './CartContext.js';

const ProductPage = () => {
  const { onAddToCart } = useContext(CartContext); // Récupérer onAddToCart depuis le contexte
  const { productId } = useParams();
  const product = productsData.find(p => p.id === parseInt(productId));

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Produit non trouvé !</div>;
  }

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity); 
    console.log(`${quantity} x ${product.title} ajouté au panier !`); // Optionnel : afficher un message
  };

  return (
    <> 
    <div className="product-page">
      <div className="product-left">
        <img src={product.image} alt={product.title} className="product-image-page" />
      </div>

      <div className="product-right">
        <h2>{product.title}</h2>
        <p className="product-price">{product.price} €</p>
        <p className="product-description">{product.description}</p>

        <div className="quantity-section">
          <select id="quantity" value={quantity} onChange={handleQuantityChange}>
            {[...Array(10).keys()].map(num => (
              <option key={num} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
    <div className="list-ingredient">
        <h4 className="title-ingredient">Ingrédients</h4>
        <p className="product-ingredients">{product.ingredients}</p>
    </div>
    </>
  );
};

export default ProductPage;
