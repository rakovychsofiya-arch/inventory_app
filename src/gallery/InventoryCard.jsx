// src/components/gallery/InventoryCard.jsx
import React from 'react';

const InventoryCard = ({ item, isFavorite, onToggleFavorite, onClick }) => {
  return (
    <div className="item-card" style={{
      border: '1px solid #ddd',
      borderRadius: '12px',
      overflow: 'hidden',
      background: '#fff',
      transition: 'transform 0.2s',
      cursor: 'pointer'
    }} onClick={onClick}>
      <div style={{ position: 'relative', height: '200px' }}>
        <img 
          src={item.inventory_image || '/images/placeholder.jpg'} 
          alt={item.inventory_name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <button 
          onClick={(e) => {
            e.stopPropagation(); // щоб не спрацював клік по картці
            onToggleFavorite(item.id);
          }}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '35px',
            height: '35px',
            cursor: 'pointer',
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
          }}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      <div style={{ padding: '15px' }}>
        <h3 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>{item.inventory_name}</h3>
        <p style={{ color: '#666', fontSize: '14px', height: '40px', overflow: 'hidden' }}>
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default InventoryCard;