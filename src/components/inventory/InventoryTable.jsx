
import { useInventory } from '../../store/InventoryContext';

const InventoryTable = ({ data }) => {
  const { deleteItem } = useInventory();

  // Якщо даних немає, покажемо просте повідомлення
  if (!data || data.length === 0) {
    return <p>У базі поки немає жодного товару.</p>;
  }

  return (
    <table border="1" style={{ width: '100%', marginTop: '20px', textAlign: 'left' }}>
      <thead>
        <tr>
          <th>Фото</th>
          <th>Назва</th>
          <th>Опис</th>
          <th>Дії</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id || Math.random()}>
            <td>
              {item.inventory_image ? (
                <img src={item.inventory_image} alt="item" width="50" />
              ) : (
                "Ні"
              )}
            </td>
            <td>{item.inventory_name}</td>
            <td>{item.description}</td>
            <td>
              <button onClick={() => deleteItem(item.id)}>Видалити</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// ОСЬ ЦЕЙ РЯДОК МАЄ БУТИ ОБОВ'ЯЗКОВО:
export default InventoryTable;