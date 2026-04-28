import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminInventory from './pages/AdminInventory';
import AdminInventoryCreate from './pages/AdminInventoryCreate';
import AdminInventoryEdit from './pages/AdminInventoryEdit';
import AdminInventoryDetails from './pages/AdminInventoryDetails';
import { Link } from 'react-router-dom';

// Твій компонент Navbar (можна винести в окремий файл)
const Navbar = () => (
  <nav style={{ 
    padding: '15px 30px', 
    background: '#2c3e50', 
    color: '#fff', 
    display: 'flex', 
    gap: '20px',
    alignItems: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  }}>
    <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>🐾 Галерея</Link>
    <Link to="/favorites" style={{ color: 'white', textDecoration: 'none' }}>⭐ Улюблені</Link>
    <Link to="/admin" style={{ color: 'white', marginLeft: 'auto', textDecoration: 'none', opacity: '0.8' }}>⚙️ Адмінка</Link>
  </nav>
);

function App() {
  return (
    <Router>
      <Navbar /> {/* Навігація буде зверху на кожній сторінці */}
      
      <div style={{ padding: '20px' }}>
        <Routes>
          {/* Маршрути для Лабораторної №8 (Користувацька частина) */}
          <Route path="/" element={<div>Тут буде компонент Gallery</div>} /> [cite: 123]
          <Route path="/favorites" element={<div>Тут буде сторінка Favorites</div>} /> [cite: 124]

          {/* Маршрути для Лабораторної №7 (Адмінка) */}
          <Route path="/admin" element={<AdminInventory />} /> [cite: 42]
          <Route path="/admin/create" element={<AdminInventoryCreate />} /> [cite: 43]
          <Route path="/admin/edit/:id" element={<AdminInventoryEdit />} /> [cite: 44]
          <Route path="/admin/details/:id" element={<AdminInventoryDetails />} /> [cite: 45]
        </Routes>
      </div>
    </Router>
  );
}

export default App;