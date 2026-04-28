import { useState, useEffect } from 'react';
import { useInventory } from '../../store/InventoryContext';
import { inventoryApi } from '../../services/inventoryApi';
import { useNavigate } from 'react-router-dom';

const InventoryForm = ({ mode, itemId }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  
  const navigate = useNavigate();
const [image, setImage] = useState('');


const handleFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    // Зберігаємо шлях до папки public/images + назва файлу
    const fileName = `/images/${file.name}`;
    setImage(fileName);
    console.log("Шлях до картинки:", fileName);
  }
};
const handleSubmit = async (e) => {
  e.preventDefault();

  const itemData = {
    inventory_name: name,
    description: description,
    inventory_image: image // Тут тепер буде рядок, наприклад "/images/pitbull.jpg"
  };

  try {
    if (mode === 'edit') {
      await inventoryApi.update(itemId, itemData);
    } else {
      await inventoryApi.create(itemData);
    }
    navigate('/admin');
  } catch (error) {
    console.error("Помилка:", error);
    alert("Не вдалося зберегти дані");
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
  onChange={handleFileChange} // Використовуємо твою правильну функцію
/>
      <button type="submit">
        {mode === 'create' ? 'Додати' : 'Зберегти зміни'}
      </button>
    </form>
  );
};

export default InventoryForm;