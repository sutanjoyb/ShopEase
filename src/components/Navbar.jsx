import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext, useState } from "react";

import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

import {
  FaShoppingCart,
  FaUser,
  FaStore,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
    if (location.pathname === "/cart") {
      navigate("/login");
    }
  };

  const handleLogoClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 md:py-4 flex justify-between items-center">
        {/* Left Side: Scaled Down Logo Brand Structure */}
        <Link
          to="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2 md:gap-3 hover:scale-102 transition cursor-pointer"
        >
          {/* Smaller padding on mobile (p-1.5) vs desktop (md:p-3) */}
          <div className="bg-blue-600 p-1.5 md:p-3 rounded-lg md:rounded-xl text-white">
            <FaStore className="text-sm md:text-xl" />
          </div>

          <div>
            {/* Decreased mobile size from text-lg to text-base */}
            <h1 className="text-base md:text-2xl font-extrabold text-gray-800 leading-tight">
              ShopEase
            </h1>
            <p className="text-[9px] md:text-xs text-gray-500 tracking-tight">
              Find it. Love it. Shop it.
            </p>
          </div>
        </Link>

        {/* Center Menu: Standard Desktop Layout (Hidden on Mobile) */}
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
              <FaSignOutAlt /> Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
            >
              <FaUser /> Login
            </Link>
          )}
        </div>

        {/* Right Side: Perfectly Aligned Mobile Actions (Cart + Hamburger) */}
        <div className="md:hidden flex items-center gap-1">
          {/* Mobile Cart Link */}
          <Link
            to="/cart"
            className="relative text-xl text-gray-700 p-2 flex items-center justify-center"
          >
            <FaShoppingCart />
            {cartItems.length > 0 && (
              <span className="absolute top-1 right-1 bg-red-500 text-white text-[9px] w-4.5 h-4.5 flex items-center justify-center rounded-full font-bold">
                {cartItems.length}
              </span>
            )}
          </Link>

          {/* Hamburger Icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-xl text-gray-700 p-2 focus:outline-none cursor-pointer flex items-center justify-center"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Slide-out Mobile Navigation Drawer with Overlay System */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          onClick={() => setIsMenuOpen(false)}
          className="absolute inset-0 bg-black/40 backdrop-blur-xs"
        />

        <div
          className={`absolute inset-y-0 left-0 w-72 bg-white shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div>
            <div className="flex items-center justify-between border-b pb-4 mb-6">
              <span className="text-xl font-black text-gray-800">Menu</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-xl text-gray-500 focus:outline-none cursor-pointer"
              >
                <FaTimes />
              </button>
            </div>

            <div className="flex flex-col space-y-4 font-medium">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-blue-600 py-2 transition border-b border-gray-50 text-gray-700"
              >
                Home
              </Link>
              <Link
                to="/products"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-blue-600 py-2 transition border-b border-gray-50 text-gray-700"
              >
                Products
              </Link>
            </div>
          </div>

          <div className="border-t pt-4 space-y-4">
            {user && (
              <div className="text-blue-600 font-semibold text-center">
                Hi, {user.fullName}
              </div>
            )}

            {user ? (
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 bg-red-500 text-white px-4 py-2.5 rounded-xl hover:bg-red-600 transition cursor-pointer text-sm font-medium shadow-xs"
              >
                <FaSignOutAlt /> Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-xl hover:bg-blue-700 transition text-sm font-medium shadow-xs"
              >
                <FaUser /> Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
