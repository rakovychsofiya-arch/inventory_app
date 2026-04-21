import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminInventory from './pages/AdminInventory';
import AdminInventoryCreate from './pages/AdminInventoryCreate';
import AdminInventoryEdit from './pages/AdminInventoryEdit';
import AdminInventoryDetails from './pages/AdminInventoryDetails';

function App() {
  return (
    <Router>
      <Routes>
        {/* Автоматично перенаправляємо з головної на адмінку (поки немає галереї) */}
        <Route path="/" element={<Navigate to="/admin" />} />

        {/* Маршрути для Лабораторної №7 */}
        <Route path="/admin" element={<AdminInventory />} />
        <Route path="/admin/create" element={<AdminInventoryCreate />} />
        <Route path="/admin/edit/:id" element={<AdminInventoryEdit />} />
        <Route path="/admin/details/:id" element={<AdminInventoryDetails />} />
      </Routes>
    </Router>
  );
}

export default App;