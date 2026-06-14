import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md w-full font-poppins">
      {/* Main Navbar Container */}
      <div className="relative flex items-center justify-between px-4 sm:px-8 py-4">
        <div className="flex items-center md:hidden z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-700 hover:text-blue-600 focus:outline-none cursor-pointer"
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none md:pointer-events-auto md:static md:translate-y-0 md:items-start grow">
          <div className="text-center md:text-left pointer-events-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-600 tracking-tight leading-none">
              ShopEase
            </h1>
            <p className="text-[10px] md:text-xs text-gray-500 mt-0.5 hidden sm:block">
              Find it. Love it. Shop it.
            </p>
          </div>
        </div>

        <div className="hidden md:flex gap-6 text-base font-medium">
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

        <div className="w-6 md:hidden"></div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 border-t border-gray-100 ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-4 font-medium text-gray-700">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-600 py-1 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/products"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-600 py-1 transition-colors duration-200"
          >
            Products
          </Link>
          <Link
            to="/cart"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-600 py-1 transition-colors duration-200"
          >
            Cart
          </Link>
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-600 py-1 transition-colors duration-200"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
