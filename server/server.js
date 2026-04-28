import express from 'express';
import cors from 'cors';
import multer from 'multer'; // Для роботи з файлами


const app = express();
const upload = multer({ dest: 'uploads/' }); // Папка, куди будуть падати фото

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Робимо папку з фото публічною

let inventory = []; // Тут будуть наші предмети

// Отримати список
app.get('/api/inventory', (req, res) => res.json(inventory));

// Створити новий (той самий /register, який ти викликаєш)
app.post('/api/register', upload.single('inventory_image'), (req, res) => {
  const newItem = {
    id: Date.now(),
    inventory_name: req.body.inventory_name,
    description: req.body.description,
    inventory_image: req.file ? `http://localhost:5170/uploads/${req.file.filename}` : null
  };
  
  inventory.push(newItem);
  console.log('Додано новий предмет:', newItem);
  res.status(201).json(newItem);
});
// Видалити товар
app.delete('/api/inventory/:id', (req, res) => {
    const { id } = req.params;
    // ВАЖЛИВО: переконайся, що id співпадає за типом (число чи рядок)
    inventory = inventory.filter(item => String(item.id) !== String(id));
    console.log(`Видалено об'єкт з ID: ${id}`);
    res.status(200).json({ message: 'Deleted' });
});
// Оновити товар (для кнопки Редагувати)
app.put('/api/inventory/:id', (req, res) => {
  const { id } = req.params;
  const index = inventory.findIndex(item => item.id === parseInt(id));
  if (index !== -1) {
    inventory[index] = { ...inventory[index], ...req.body };
    res.json(inventory[index]);
  } else {
    res.status(404).json({ message: "Не знайдено" });
  }
});
// Отримати ОДИН предмет за ID
app.get('/api/inventory/:id', (req, res) => {
  const { id } = req.params;
  const item = inventory.find(item => String(item.id) === String(id));
  
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: "Предмет не знайдено" });
  }
});

app.listen(5170, () => console.log('Сервер готовий до пітбультер\'єрів на 5170!'));