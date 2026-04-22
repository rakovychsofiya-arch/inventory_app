
import { useNavigate } from 'react-router-dom';
import { useInventory } from '../../store/InventoryContext';

const InventoryTable = ({ data }) => {
  const navigate = useNavigate();
  const { deleteItem } = useInventory();

  if (!data || data.length === 0) {
    return <p style={{ textAlign: 'center', marginTop: '20px' }}>У базі поки порожньо.</p>;
  }

  return (
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
              <button 
                onClick={() => navigate(`/admin/edit/${item.id}`)}
                style={{ marginRight: '8px', cursor: 'pointer' }}
              >
                 Редагувати
              </button>
              <button 
                onClick={() => {
                  if(window.confirm('Видалити цей предмет?')) deleteItem(item.id)
                }}
                style={{ color: 'red', cursor: 'pointer' }}
              >
                Видалити
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InventoryTable;