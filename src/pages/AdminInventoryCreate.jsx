import InventoryForm from '../components/inventory/InventoryForm';

const AdminInventoryCreate = () => {
  return (
    <div>
      <h2>Додати новий інвентар</h2>
      <InventoryForm mode="create" />
    </div>
  );
};
export default AdminInventoryCreate;