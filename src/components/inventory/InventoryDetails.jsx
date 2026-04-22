import { useParams, useNavigate } from 'react-router-dom';
import { useInventory } from '../../store/InventoryContext';

const AdminInventoryDetails = () => {
  const { id } = useParams(); // Отримуємо ID з URL
  const navigate = useNavigate();
  const { items } = useInventory(); // Беремо список товарів із нашого "сховища"

  // Шукаємо конкретний товар за ID
  const item = items.find(i => i.id === parseInt(id));

  if (!item) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Товар не знайдено</h2>
        <button onClick={() => navigate('/admin')}>Повернутися до списку</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '600px' }}>
      <button onClick={() => navigate('/admin')}>← Назад до списку</button>
      
      <h1 style={{ marginTop: '20px' }}>{item.inventory_name}</h1>
      
      <div style={{ margin: '20px 0' }}>
        {item.inventory_image ? (
          <img 
            src={item.inventory_image} 
            alt={item.inventory_name} 
            style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }} 
          />
        ) : (
          <div style={{ width: '100%', height: '200px', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Фото відсутнє
          </div>
        )}
      </div>

      <h3>Опис:</h3>
      <p>{item.description || "Опис відсутній"}</p>

      <div style={{ marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '10px' }}>
        <small>ID товару: {item.id}</small>
      </div>
    </div>
  );
};

export default AdminInventoryDetails;