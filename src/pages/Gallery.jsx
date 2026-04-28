// src/pages/Gallery.jsx
import React, { useState, useEffect } from 'react';
import { useInventory } from '../store/InventoryContext';
import { useFavorites } from '../hooks/useFavorites';
import InventoryCard from '../components/gallery/InventoryCard';
import InventoryDetails from '../components/inventory/InventoryDetails';

const Gallery = () => {
  const { items, fetchInventory } = useInventory();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => { fetchInventory(); }, []);

  return (
    <div>
      <h1>Галерея наших улюбленців</h1>
      <div className="gallery-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        padding: '20px 0'
      }}>
        {items.map(item => (
          <InventoryCard 
            key={item.id}
            item={item}
            isFavorite={isFavorite(item.id)}
            onToggleFavorite={toggleFavorite}
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </div>

      {/* Модалка Quick View */}
      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)} style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex',
          justifyContent: 'center', alignItems: 'center', zIndex: 1000
        }}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{
            background: 'white', padding: '30px', borderRadius: '15px',
            maxWidth: '600px', width: '90%', maxHeight: '90vh', overflowY: 'auto'
          }}>
            <button onClick={() => setSelectedItem(null)} style={{ float: 'right' }}>Закрити</button>
            <InventoryDetails item={selectedItem} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;