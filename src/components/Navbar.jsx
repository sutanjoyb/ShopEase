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

  // State to manage mobile menu open/close toggle
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 md:py-4 flex justify-between items-center">
        {/* Left Side: Mobile Hamburger Button & Logo Setup */}
        <div className="flex items-center gap-3">
          {/* Hamburger Icon Trigger (Visible on mobile only, pushes before title) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-xl text-gray-700 focus:outline-none cursor-pointer"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Logo Brand Structure (Scales down on mobile devices) */}
          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex items-center gap-2 md:gap-3 hover:scale-102 transition cursor-pointer"
          >
            {/* Small box container on mobile, medium on desktop */}
            <div className="bg-blue-600 p-2 md:p-3 rounded-lg md:rounded-xl text-white">
              <FaStore className="text-base md:text-xl" />
            </div>

            <div>
              {/* text-lg on mobile, text-2xl on desktop */}
              <h1 className="text-lg md:text-2xl font-extrabold text-gray-800 leading-tight">
                ShopEase
              </h1>
              <p className="hidden sm:block text-[10px] md:text-xs text-gray-500">
                Find it. Love it. Shop it.
              </p>
            </div>
          </Link>
        </div>

        {/* Center/Right Desktop Menu Structures (Hidden on Mobile viewports) */}
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

        {/* Right Side Only: Mobile Dedicated Cart Container */}
        <div className="md:hidden flex items-center">
          <Link to="/cart" className="relative text-2xl text-gray-700 p-2">
            <FaShoppingCart />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Hamburger Drawer/Dropdown panel for Mobile View options */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4 font-medium flex flex-col shadow-inner">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-blue-600 py-1 transition border-b border-gray-50"
          >
            Home
          </Link>
          <Link
            to="/products"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-blue-600 py-1 transition border-b border-gray-50"
          >
            Products
          </Link>

          {user && (
            <div className="text-blue-600 font-semibold pt-1">
              Hi, {user.fullName}
            </div>
          )}

          {user ? (
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 bg-red-500 text-white px-4 py-2.5 rounded-xl hover:bg-red-600 transition cursor-pointer text-sm"
            >
              <FaSignOutAlt /> Logout
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-xl hover:bg-blue-700 transition text-sm"
            >
              <FaUser /> Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
