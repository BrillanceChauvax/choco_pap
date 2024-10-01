import React, { useEffect, useState } from 'react';
import productsData from './products.json';

const FilterSidebar = ({ onFilterChange }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(100);
  const [minRating, setMinRating] = useState(0);
  const [maxRating, setMaxRating] = useState(5);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false); // Commencer fermé par défaut
  const [isPriceOpen, setIsPriceOpen] = useState(false); // État pour la section Prix
  const [isRatingOpen, setIsRatingOpen] = useState(false); // État pour la section Notes

  // Mettre à jour les catégories sélectionnées et appliquer les filtres
  const handleCategoryChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
  };

  // Appliquer les filtres en temps réel à chaque changement de filtre
  useEffect(() => {
    onFilterChange({
      selectedCategories,
      minPrice,
      maxPrice,
      minRating,
      maxRating
    });
  }, [selectedCategories, minPrice, maxPrice, minRating, maxRating]);

  return (
    <aside className="filter-sidebar">
      <h3>FILTRE</h3>

      {/* Section Catégories */}
      <div className="filter-section">
        <h4 onClick={() => setIsCategoriesOpen(!isCategoriesOpen)} style={{ cursor: 'pointer' }}>
          Catégories {isCategoriesOpen ? '-' : '+'}
        </h4>
        {isCategoriesOpen && (
          <div className="categories-list">
            {Object.keys(productsData[0].category).map((cat) => (
              <label key={cat}>
                <input
                  type="checkbox"
                  value={cat}
                  checked={selectedCategories.includes(cat)}
                  onChange={() => handleCategoryChange(cat)}
                />
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Section Prix */}
      <div className="filter-section">
        <h4 onClick={() => setIsPriceOpen(!isPriceOpen)} style={{ cursor: 'pointer' }}>
          Prix {isPriceOpen ? '-' : '+'}
        </h4>
        {isPriceOpen && (
          <div className="price-fields">
            <label>
              Prix Min
              <select value={minPrice} onChange={(e) => setMinPrice(e.target.value)}>
                {[...Array(100).keys()].map(num => (
                  <option key={num} value={num + 1}>{num + 1}€</option>
                ))}
              </select>
            </label>
            <label>
              Prix Max
              <select value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}>
                {[...Array(100).keys()].map(num => (
                  <option key={num} value={num + 1}>{num + 1}€</option>
                ))}
              </select>
            </label>
          </div>
        )}
      </div>

      {/* Section Notes */}
      <div className="filter-section">
        <h4 onClick={() => setIsRatingOpen(!isRatingOpen)} style={{ cursor: 'pointer' }}>
          Notes {isRatingOpen ? '-' : '+'}
        </h4>
        {isRatingOpen && (
          <div className="rating-fields">
            <label>
              Note Min
              <select value={minRating} onChange={(e) => setMinRating(e.target.value)}>
                {[...Array(6).keys()].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </label>
            <label>
              Note Max
              <select value={maxRating} onChange={(e) => setMaxRating(e.target.value)}>
                {[...Array(6).keys()].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </label>
          </div>
        )}
      </div>
    </aside>
  );
};

export default FilterSidebar;

