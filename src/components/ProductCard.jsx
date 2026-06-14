import { Link } from "react-router-dom";

function ProductCard({ id, title, price, image, onAddToCart }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
      <Link to={`/products/${id}`} className="group block w-full mb-4">
        <div className="w-full h-64 bg-gray-50 rounded-xl overflow-hidden mb-4 flex items-center justify-center mix-blend-multiply">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <h3 className="text-base font-bold text-gray-800 line-clamp-2 h-12 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        <p className="text-2xl font-black text-blue-600">
          ${Number(price).toFixed(2)}
        </p>
      </Link>

      <button
        onClick={onAddToCart}
        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 active:scale-98 transition-all cursor-pointer text-sm tracking-wide shadow-xs"
      >
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;
