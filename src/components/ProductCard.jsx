function ProductCard({ title, price, image }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover rounded-lg mb-4"
      />

      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      <p className="text-blue-600 text-2xl font-bold mb-4">${price}</p>

      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
