import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-white shadow-md">
      <div>
        <h1 className="text-3xl font-bold text-blue-600">ShopEase</h1>

        <p className="text-sm text-gray-500">Find it. Love it. Shop it.</p>
      </div>

      <div className="flex gap-8 text-lg font-medium">
        <Link
          to="/"
          className="hover:text-blue-600 hover:scale-110 transition-all duration-300"
        >
          Home
        </Link>
        <Link
          to="/products"
          className="hover:text-blue-600 hover:scale-110 transition-all duration-300"
        >
          Products
        </Link>
        <Link
          to="/cart"
          className="hover:text-blue-600 hover:scale-110 transition-all duration-300"
        >
          Cart
        </Link>
        <Link
          to="/login"
          className="hover:text-blue-600 hover:scale-110 transition-all duration-300"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
