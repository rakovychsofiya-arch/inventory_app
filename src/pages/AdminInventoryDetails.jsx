import { useParams } from 'react-router-dom';
import InventoryDetails from '../components/inventory/InventoryDetails';

const AdminInventoryDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Детальна інформація</h2>
      <InventoryDetails itemId={id} />
    </div>
  );
};
export default AdminInventoryDetails;