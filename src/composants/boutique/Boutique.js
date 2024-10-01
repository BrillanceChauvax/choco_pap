import React, { useState, useEffect } from 'react';
import productsData from './products.json'; // Assurez-vous de mettre le bon chemin vers votre fichier JSON
import FilterSidebar from './Filtre.js'; // Assurez-vous d'importer votre composant de filtre
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

  return (
    <div className="boutique-container">
      <FilterSidebar onFilterChange={handleFilterChange} />
      <div><p className="shop-name">BOUTIQUE</p>
      <div className="products-grid">
        {filteredProducts.length === 0 ? (
          <p className="no-product">Aucun produit trouvé !</p> // Message d'absence de produit
        ) : (
          filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} className="product-image" />
              <h4>{product.title}</h4>
              <p className="product-price">{product.price} €</p>
              <p className="product-note">Note : {product.note}</p>
              <button className="add-to-cart">Ajouter au panier</button>
            </div>
          ))
        )}
      </div>
    </div></div>
  );
};

export default Boutique;