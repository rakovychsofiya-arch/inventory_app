import axios from 'axios';

// ТУТ впиши URL, який ми обговорювали (або залиш поки порожнім)
const API_URL = 'http://localhost:5000'; 

const api = axios.create({
  baseURL: API_URL,
});

export const inventoryApi = {
  // 1. Отримати весь список
  getAll: () => api.get('/inventory'),

  // 2. Отримати один товар за ID (ДЛЯ ДЕТАЛЕЙ!)
  getById: (id) => api.get(`/inventory/${id}`),

  // 3. Створити нову позицію
  // json-server приймає звичайний об'єкт. 
  // Якщо ти шлеш файл через FormData, він просто збереже його як об'єкт, 
  // але краще спочатку перетворити дані в JSON, якщо не налаштована робота з файлами.
  create: (data) => api.post('/inventory', data),

  // 4. Видалити
  delete: (id) => api.delete(`/inventory/${id}`),

  // 5. Повне оновлення (PUT)
  update: (id, data) => api.put(`/inventory/${id}`, data),

  // 6. Часткове оновлення (PATCH) - зручно для зміни одного поля
  patch: (id, data) => api.patch(`/inventory/${id}`, data),
};