import React, { useState } from 'react';
import FilterSidebar from './Filtre.js';
import productsData from './products.json';
import './Boutique.css';

const Boutique = () => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);

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
      // Filtrer par catégorie (vérifier si l'une des catégories est sélectionnée)
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);

      return (
        categoryMatch &&
        product.price >= minPrice &&
        product.price <= maxPrice &&
        product.rating >= minRating &&
        product.rating <= maxRating
      );
    });

    setFilteredProducts(filtered);
  };

  return (
    <div className="boutique-container">
      <FilterSidebar onFilterChange={handleFilterChange} />

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h4>{product.name}</h4>
            <p>{product.price} €</p>
            <p>Note : {product.rating}</p>
            <button className="add-to-cart">Ajouter au panier</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Boutique;
