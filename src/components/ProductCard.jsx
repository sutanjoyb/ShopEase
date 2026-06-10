function ProductCard({ title, price, onAddToCart }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 cursor-pointer">
      <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>

      <h3 className="text-center text-lg font-semibold mb-2">{title}</h3>

      <p className="text-center text-2xl font-bold text-blue-600 mb-4">
        ₹{price}
      </p>

      <button
        onClick={onAddToCart}
        className="cursor-pointer w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
