import React, { useState, useContext } from 'react'; 
import { Link } from 'react-router-dom';
import productsData from './products.json'; 
import { CartContext } from './CartContext.js';
import FilterSidebar from './Filtre.js'; 
import './Boutique.css';

const Boutique = () => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const { onAddToCart } = useContext(CartContext); // Récupérer onAddToCart depuis le contexte

  const handleFilterChange = (filters) => {
    const { selectedCategories, minPrice, maxPrice, minRating, maxRating } = filters;

    // Vérifier si aucun filtre n'est appliqué
    if (
      selectedCategories.length === 0 &&
      minPrice === 1 &&
      maxPrice === 100 &&
      minRating === 0 &&
      maxRating === 5
    ) {
      setFilteredProducts(productsData); // Afficher tous les produits
      return;
    }

    // Sinon, appliquer les filtres
    const filtered = productsData.filter(product => {
      // Filtrer par catégorie
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.some(category => product.category[category]);

      return (
        categoryMatch &&
        product.price >= minPrice &&
        product.price <= maxPrice &&
        product.note >= minRating &&
        product.note <= maxRating
      );
    });

    setFilteredProducts(filtered);
  };

  const handleAddToCart = (product) => {
    // Par défaut, ajouter 1 au panier
    onAddToCart(product, 1);
    console.log(`${product.title} ajouté au panier !`);
  };

  return (
    <div className="boutique-container">
      <FilterSidebar onFilterChange={handleFilterChange} />
      <div>
        <p className="shop-name">BOUTIQUE</p>
        <div className="products-grid">
          {filteredProducts.length === 0 ? (
            <p className="no-product">Aucun produit trouvé !</p> 
          ) : (
            filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <Link to={`/product/${product.id}`} className="product-card-link">
                  <img src={product.image} alt={product.title} className="product-image" />
                  <h4>{product.title}</h4>
                  <p className="product-price">{product.price} €</p>
                  <p className="product-note">Note : {product.note}</p>
                </Link>
                <button
                  className="add-to-cart"
                  onClick={() => handleAddToCart(product)} // Passer le produit à handleAddToCart
                >
                  Ajouter au panier
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Boutique;
