import axios from 'axios';

// ТУТ впиши URL, який ми обговорювали (або залиш поки порожнім)
const API_URL = 'http://localhost:5170/api'; 

const api = axios.create({
  baseURL: API_URL,
});

export const inventoryApi = {
  // 1. Отримати весь список (GET /inventory) 
  getAll: () => api.get('/inventory'),

  // 2. Створити нову позицію (POST /register) 
  // Використовуємо FormData, бо за методичкою треба передавати фото [cite: 73]
  create: (formData) => api.post('/register', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),

  // 3. Видалити (DELETE /inventory/:id)
  delete: (id) => api.delete(`/inventory/${id}`),

  // 4. Оновити текст (PUT /inventory/:id) 
  updateData: (id, data) => api.put(`/inventory/${id}`, data),

  // 5. Оновити тільки фото (PUT /inventory/:id/photo)
  updatePhoto: (id, photoFormData) => api.put(`/inventory/${id}/photo`, photoFormData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
};