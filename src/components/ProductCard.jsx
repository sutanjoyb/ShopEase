import { Link } from "react-router-dom";
import { FaShoppingCart, FaStar } from "react-icons/fa";

function ProductCard({ id, title, price, image, rating = 4.5, onAddToCart }) {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        overflow-hidden
        shadow-md
        hover:shadow-2xl
        transition-all
        duration-500
        hover:-translate-y-2
        group
      "
    >
      {/* Image Section */}
      <Link to={`/products/${id}`}>
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="
              w-full
              h-64
              object-cover
              group-hover:scale-110
              transition-transform
              duration-500
            "
          />

          {/* Discount Badge */}
          <span
            className="
              absolute
              top-3
              left-3
              bg-red-500
              text-white
              text-xs
              font-bold
              px-3
              py-1
              rounded-full
            "
          >
            SALE
          </span>

          {/* Rating */}
          <div
            className="
              absolute
              top-3
              right-3
              bg-white
              px-2
              py-1
              rounded-full
              flex
              items-center
              gap-1
              shadow
            "
          >
            <FaStar className="text-yellow-400 text-sm" />
            <span className="text-sm font-semibold">{rating}</span>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5">
        <Link to={`/products/${id}`}>
          <h3
            className="
              text-lg
              font-bold
              text-gray-800
              line-clamp-2
              h-14
              hover:text-blue-600
              transition
            "
          >
            {title}
          </h3>
        </Link>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-3xl font-extrabold text-blue-600">${price}</p>

          <span
            className="
              text-green-600
              text-sm
              font-semibold
            "
          >
            In Stock
          </span>
        </div>

        {/* Buttons */}
        <div className="mt-5 flex flex-col gap-3">
          <button
            onClick={onAddToCart}
            className="
              flex
              items-center
              justify-center
              gap-2
              bg-blue-600
              text-white
              py-3
              rounded-xl
              font-semibold
              hover:bg-blue-700
              transition
              cursor-pointer
            "
          >
            <FaShoppingCart />
            Add To Cart
          </button>

          <Link
            to={`/products/${id}`}
            className="
              text-center
              border-2
              border-blue-600
              text-blue-600
              py-3
              rounded-xl
              font-semibold
              hover:bg-blue-600
              hover:text-white
              transition
            "
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
