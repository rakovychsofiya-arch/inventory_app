// src/pages/Favorites.jsx
import React from 'react';
import { useInventory } from '../store/InventoryContext';
import { useFavorites } from '../hooks/useFavorites';
import InventoryCard from '../components/gallery/InventoryCard';

const Favorites = () => {
  const { items } = useInventory();
  const { favorites, isFavorite, toggleFavorite } = useFavorites();

  const favoriteItems = items.filter(item => favorites.includes(item.id));

  return (
    <div>
      <h1>Твої улюблені ❤️</h1>
      {favoriteItems.length === 0 ? (
        <p>Ти ще нікого не додав(ла) до улюблених.</p>
      ) : (
        <div className="gallery-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px'
        }}>
          {favoriteItems.map(item => (
            <InventoryCard 
              key={item.id}
              item={item}
              isFavorite={true}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;