function Modal({ isOpen, onClose, title, message }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-11/12 max-w-md p-6 rounded-2xl shadow-2xl">
        <h2 className="text-2xl font-bold text-green-600 mb-4">{title}</h2>

        <p className="text-gray-700 mb-6">{message}</p>

        <button
          onClick={onClose}
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
