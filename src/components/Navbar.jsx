import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

import { FaShoppingCart, FaUser, FaStore, FaSignOutAlt } from "react-icons/fa";

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    if (location.pathname === "/cart") {
      navigate("/login");
    }
  };

 
  const handleLogoClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault(); 
      window.scrollTo({
        top: 0,
        behavior: "smooth", 
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    
        <Link
          to="/"
          onClick={handleLogoClick}
          className="flex items-center gap-3 hover:scale-105 transition cursor-pointer"
        >
          <div className="bg-blue-600 p-3 rounded-xl text-white">
            <FaStore className="text-xl" />
          </div>

          <div>
            <h1 className="text-2xl font-extrabold text-gray-800">ShopEase</h1>
            <p className="text-xs text-gray-500">Find it. Love it. Shop it.</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          <Link to="/products" className="hover:text-blue-600 transition">
            Products
          </Link>

          <Link to="/cart" className="relative hover:text-blue-600 transition">
            <div className="flex items-center gap-2">
              <FaShoppingCart />
              <span>Cart</span>
              {cartItems.length > 0 && (
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                  {cartItems.length}
                </span>
              )}
            </div>
          </Link>

          {user && (
            <span className="text-blue-600 font-semibold">
              Hi, {user.fullName}
            </span>
          )}

          {user ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition cursor-pointer"
            >
              <FaSignOutAlt />
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
            >
              <FaUser />
              Login
            </Link>
          )}
        </div>

        <div className="md:hidden flex items-center gap-4">
          <Link to="/cart" className="relative text-xl">
            <FaShoppingCart />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-1.5 rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
