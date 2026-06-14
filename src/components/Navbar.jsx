import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-white shadow-md w-full font-poppins">
      <div>
        <h1 className="text-3xl font-bold text-blue-600 tracking-tight">
          ShopEase
        </h1>
        <p className="text-xs text-gray-500">Find it. Love it. Shop it.</p>
      </div>

      <div className="flex gap-6 text-base font-medium">
        <Link
          to="/"
          className="hover:text-blue-600 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          to="/products"
          className="hover:text-blue-600 transition-colors duration-200"
        >
          Products
        </Link>
        <Link
          to="/cart"
          className="hover:text-blue-600 transition-colors duration-200"
        >
          Cart
        </Link>
        <Link
          to="/login"
          className="hover:text-blue-600 transition-colors duration-200"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
