import { useState, useEffect } from 'react';
import { useInventory } from '../../store/InventoryContext';
import { inventoryApi } from '../../services/inventoryApi';
import { useNavigate } from 'react-router-dom';

const InventoryForm = ({ mode, itemId }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Створюємо "коробку" FormData для передачі файлу та тексту [cite: 73, 96]
    const formData = new FormData();
    formData.append('inventory_name', name);
    formData.append('description', description);
    if (image) {
      formData.append('inventory_image', image); // Додаємо файл фото [cite: 69]
    }

    try {
      if (mode === 'create') {
        await inventoryApi.create(formData);
      } else {
        // Логіка для редагування (напишемо згодом)
      }
      navigate('/admin'); // Після успіху повертаємось до списку [cite: 101]
    } catch (error) {
      alert("Помилка при збереженні!");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
      <input 
        type="text" 
        placeholder="Назва інвентарю" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <textarea 
        placeholder="Опис" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <input 
        type="file" 
        accept="image/*" 
        onChange={(e) => setImage(e.target.files[0])} // Беремо перший вибраний файл [cite: 97]
      />
      <button type="submit">
        {mode === 'create' ? 'Додати' : 'Зберегти зміни'}
      </button>
    </form>
  );
};

export default InventoryForm;