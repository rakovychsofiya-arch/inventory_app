import axios from 'axios';

// ТУТ впиши URL, який ми обговорювали (або залиш поки порожнім)
const API_URL = 'http://localhost:5173/api'; 

const api = axios.create({
  baseURL: API_URL,
});

export const inventoryApi = {
  // 1. Отримати весь список (GET /inventory) [cite: 63]
  getAll: () => api.get('/inventory'),

  // 2. Створити нову позицію (POST /register) [cite: 71]
  // Використовуємо FormData, бо за методичкою треба передавати фото [cite: 73]
  create: (formData) => api.post('/register', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),

  // 3. Видалити (DELETE /inventory/:id) [cite: 100]
  delete: (id) => api.delete(`/inventory/${id}`),

  // 4. Оновити текст (PUT /inventory/:id) [cite: 88]
  updateData: (id, data) => api.put(`/inventory/${id}`, data),

  // 5. Оновити тільки фото (PUT /inventory/:id/photo) [cite: 95]
  updatePhoto: (id, photoFormData) => api.put(`/inventory/${id}/photo`, photoFormData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
};