import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { inventoryApi } from '../services/inventoryApi';
import InventoryDetails from '../components/inventory/InventoryDetails';

const AdminInventoryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
    inventoryApi.getById(id)
      .then(res => {
        setItem(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Помилка:", err);
        setLoading(false);
      });
}, [id]);

  if (loading) return <div className="admin-container">Завантаження даних...</div>;
  if (!item) return <div className="admin-container">Товар не знайдено</div>;

  return (
    <div className="admin-container">
      {/* Кнопки навігації */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <button onClick={() => navigate('/admin')}>← Назад до списку</button>
        
        {/* ОСЬ КНОПКА РЕДАГУВАННЯ */}
        <button 
          onClick={() => navigate(`/admin/edit/${id}`)}
          style={{ backgroundColor: '#007bff', color: 'white' }}
        >
          Редагувати цей товар
        </button>
      </div>

      <hr />

      {/* ОСЬ ТУТ МАЮТЬ БУТИ ДАНІ: Фото, Заголовок, Опис */}
      <div className="details-content" style={{ marginTop: '20px' }}>
        <InventoryDetails item={item} />
      </div>
    </div>
  );
};

export default AdminInventoryDetails;