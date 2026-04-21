import { useEffect } from 'react';
import { useInventory } from '../store/InventoryContext';
import InventoryTable from '../components/inventory/InventoryTable';
import { Link } from 'react-router-dom';

const AdminInventory = () => {
  // Дістаємо все необхідне з нашого "сховища"
  const { items, loading, error, fetchInventory } = useInventory();

  // Як тільки сторінка відкривається — просимо сервер дати нам дані
  useEffect(() => {
    fetchInventory();
  }, []); // Порожні дужки означають: "виконати один раз при старті"

  return (
    <div className="admin-container">
      <h1>Панель управління складом</h1>
      
      {/* Кнопка переходу на сторінку створення */}
      <Link to="/admin/create" className="btn-add">
        + Додати нову позицію
      </Link>

      {/* Обробка різних станів, які ми прописали в контексті */}
      {loading && <p>Завантаження даних...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {!loading && !error && (
        <InventoryTable data={items} />
      )}
    </div>
  );
};

export default AdminInventory;