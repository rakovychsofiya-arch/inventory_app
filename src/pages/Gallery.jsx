// src/pages/Gallery.jsx
import React, { useState, useEffect } from 'react';
import { useInventory } from '../store/InventoryContext';
import { useFavorites } from '../hooks/useFavorites';
import InventoryCard from '../components/gallery/InventoryCard';
import InventoryQuickView from '../components/gallery/InventoryQuickView';
import FavoritesBar from '../components/gallery/FavoritesBar';

const Gallery = () => {
  const { items, fetchInventory } = useInventory();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [selectedItem, setSelectedItem] = useState(null);

  // Завантажуємо дані при першому рендері
  useEffect(() => { 
    fetchInventory(); 
  }, []);

  return (
    <div className="gallery-page">
      <h1>Галерея наших улюбленців</h1>
      
      {/* Панель з інформацією про кількість улюблених */}
      <FavoritesBar />

      {/* Адаптивна сітка карток */}
      <div className="gallery-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '25px',
        padding: '20px 0'
      }}>
        {items.map(item => (
          <InventoryCard 
            key={item.id}
            item={item}
            isFavorite={isFavorite(item.id)}
            onToggleFavorite={toggleFavorite}
            // При кліку на картку відкриваємо QuickView
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </div>

      {/* Швидкий перегляд (модалка або slide-over) */}
      {selectedItem && (
        <InventoryQuickView 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}
    </div>
  );
};

export default Gallery;