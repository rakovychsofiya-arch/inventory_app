const ConfirmModal = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null; // Якщо модалка закрита — нічого не рендеримо

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message || "Ви впевнені, що хочете це видалити?"}</p>
        <button onClick={onConfirm}>Так, видалити</button>
        <button onClick={onClose}>Скасувати</button>
      </div>
    </div>
  );
};

export default ConfirmModal;