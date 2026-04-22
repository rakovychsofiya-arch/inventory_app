import { createContext, useState, useContext } from 'react';
import { inventoryApi } from '../services/inventoryApi';

const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [items, setItems] = useState([]); // Тут лежить наш список товарів 
  const [loading, setLoading] = useState(false); // Стан завантаження 
  const [error, setError] = useState(null); // Стан помилки 

  // Функція для оновлення списку з сервера
  const fetchInventory = async () => {
    setLoading(true);
    try {
      const response = await inventoryApi.getAll();
      setItems(response.data); // Зберігаємо отримані дані
      setError(null);
    } catch (err) {
      setError('Не вдалося завантажити інвентар');
    } finally {
      setLoading(false);
    }
  };

  // Функція видалення (щоб викликати її з будь-якого компонента)
  const deleteItem = async (id) => {
    try {
      await inventoryApi.delete(id);
      // Після видалення на сервері — видаляємо локально, щоб таблиця оновилася
      setItems(items.filter(item => item.id !== id));
    } catch (err) {
      alert("Помилка при видаленні");
    }
  };

  return (
    <InventoryContext.Provider value={{ items, loading, error, fetchInventory, deleteItem }}>
      {children}
    </InventoryContext.Provider>
  );
};

// Власний хук, щоб було зручно користуватися контекстом
export const useInventory = () => {useContext(InventoryContext)
    const context = useContext(InventoryContext);
    if (!context) {
    console.error("useInventory must be used within an InventoryProvider");
  }
  return context;
};