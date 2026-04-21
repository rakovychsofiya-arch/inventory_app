import { useParams } from 'react-router-dom';
import InventoryForm from '../components/inventory/InventoryForm';

const AdminInventoryEdit = () => {
  const { id } = useParams(); // Отримуємо ID з адресного рядка

  return (
    <div>
      <h2>Редагувати товар #{id}</h2>
      <InventoryForm mode="edit" itemId={id} />
    </div>
  );
};
export default AdminInventoryEdit;