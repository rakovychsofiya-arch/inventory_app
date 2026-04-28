import { useState } from 'react'; // Додаємо useState для керування модалкою
import { useNavigate } from 'react-router-dom';
import { useInventory } from '../../store/InventoryContext.jsx';
import ConfirmModal from "./ConfirmModal.jsx"; // Додали .jsx в кінці
const InventoryTable = ({ data }) => {
  const navigate = useNavigate();
  const { deleteItem } = useInventory();

  // Стейт для модалки
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  if (!data || data.length === 0) {
    return <p style={{ textAlign: 'center', marginTop: '20px' }}>У базі поки порожньо.</p>;
  }

  // Функція, що відкриває модалку
  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  // Функція, що підтверджує видалення
  const handleConfirmDelete = () => {
    deleteItem(selectedId);
    setIsModalOpen(false);
  };

  return (
    <>
      <table border="1" style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f4f4f4' }}>
            <th>Фото</th>
            <th>Назва</th>
            <th>Опис</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} style={{ textAlign: 'center' }}>
              <td>
                {item.inventory_image ? (
                  <img src={item.inventory_image} alt="item" width="60" style={{ borderRadius: '4px' }} />
                ) : (
                  "Немає фото"
                )}
              </td>
              <td>{item.inventory_name}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => navigate(`/admin/details/${item.id}`)}>Переглянути</button>
                <button onClick={() => navigate(`/admin/edit/${item.id}`)}>Редагувати</button>
                
                {/* Замість window.confirm викликаємо нашу функцію */}
                <button 
                  onClick={() => handleDeleteClick(item.id)} 
                  style={{ color: 'red', cursor: 'pointer' }}
                >
                  Видалити
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ВИКЛИК МОДАЛКИ */}
      <ConfirmModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onConfirm={handleConfirmDelete}
        message="Ви впевнені, що хочете видалити цю собаку?"
      />
    </>
  );
};

export default InventoryTable;