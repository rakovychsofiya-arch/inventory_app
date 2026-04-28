import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminInventory from './pages/AdminInventory';
import AdminInventoryCreate from './pages/AdminInventoryCreate';
import AdminInventoryEdit from './pages/AdminInventoryEdit';
import AdminInventoryDetails from './pages/AdminInventoryDetails';
import { Link } from 'react-router-dom';
// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '10px', background: '#333', color: '#fff', display: 'flex', gap: '20px' }}>
    <Link to="/" style={{ color: 'white' }}>Галерея (User)</Link>
    <Link to="/favorites" style={{ color: 'white' }}>Улюблені</Link>
    <Link to="/admin" style={{ color: 'white', marginLeft: 'auto' }}>Адмін-панель</Link>
  </nav>
);
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