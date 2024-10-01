import React, { useState, useEffect } from 'react';

const FilterSidebar = ({ onFilterChange }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(100);
  const [minRating, setMinRating] = useState(0);
  const [maxRating, setMaxRating] = useState(5);

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
      <h3>Filtres</h3>

      {/* Section Catégories */}
      <div className="filter-section">
        <h4>Catégories</h4>
        <label>
          <input
            type="checkbox"
            value="1"
            checked={selectedCategories.includes('1')}
            onChange={() => handleCategoryChange('1')}
          />
          Catégorie 1
        </label>
        <label>
          <input
            type="checkbox"
            value="2"
            checked={selectedCategories.includes('2')}
            onChange={() => handleCategoryChange('2')}
          />
          Catégorie 2
        </label>
        <label>
          <input
            type="checkbox"
            value="3"
            checked={selectedCategories.includes('3')}
            onChange={() => handleCategoryChange('3')}
          />
          Catégorie 3
        </label>
        <label>
          <input
            type="checkbox"
            value="4"
            checked={selectedCategories.includes('4')}
            onChange={() => handleCategoryChange('4')}
          />
          Catégorie 4
        </label>
        <label>
          <input
            type="checkbox"
            value="5"
            checked={selectedCategories.includes('5')}
            onChange={() => handleCategoryChange('5')}
          />
          Catégorie 5
        </label>
        <label>
          <input
            type="checkbox"
            value="6"
            checked={selectedCategories.includes('6')}
            onChange={() => handleCategoryChange('6')}
          />
          Catégorie 6
        </label>
      </div>

      {/* Section Prix */}
      <div className="filter-section">
        <h4>Prix</h4>
        <label>Prix Min</label>
        <select value={minPrice} onChange={(e) => setMinPrice(e.target.value)}>
          {[...Array(100).keys()].map(num => (
            <option key={num} value={num + 1}>{num + 1}</option>
          ))}
        </select>

        <label>Prix Max</label>
        <select value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}>
          {[...Array(100).keys()].map(num => (
            <option key={num} value={num + 1}>{num + 1}</option>
          ))}
        </select>
      </div>

      {/* Section Notes */}
      <div className="filter-section">
        <h4>Notes</h4>
        <label>Note Min</label>
        <select value={minRating} onChange={(e) => setMinRating(e.target.value)}>
          {[...Array(6).keys()].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>

        <label>Note Max</label>
        <select value={maxRating} onChange={(e) => setMaxRating(e.target.value)}>
          {[...Array(6).keys()].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>
    </aside>
  );
};

export default FilterSidebar;
