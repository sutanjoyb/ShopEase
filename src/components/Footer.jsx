import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div>
            <h2 className="text-3xl font-extrabold mb-4 text-blue-600">ShopEase</h2>

            <p className="text-gray-400 leading-7">
              ShopEase is your trusted destination for premium products, secure
              checkout, fast delivery, and exceptional customer experience.
            </p>

            <div className="flex gap-4 mt-6 text-2xl">
              <FaFacebook className="cursor-pointer hover:text-blue-500 transition" />

              <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />

              <FaTwitter className="cursor-pointer hover:text-sky-400 transition" />

              <FaGithub className="cursor-pointer hover:text-gray-300 transition" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5">Quick Links</h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/products" className="hover:text-white transition">
                  Products
                </Link>
              </li>

              <li>
                <Link to="/cart" className="hover:text-white transition">
                  Cart
                </Link>
              </li>

              <li>
                <Link to="/login" className="hover:text-white transition">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5">Categories</h3>

            <ul className="space-y-3 text-gray-400">
              <li>Beauty</li>
              <li>Fragrances</li>
              <li>Furniture</li>
              <li>Groceries</li>
              <li>Electronics</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5">Customer Support</h3>

            <ul className="space-y-3 text-gray-400">
              <li>Help Center</li>
              <li>Track Orders</li>
              <li>Shipping Policy</li>
              <li>Returns & Refunds</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5">Contact Us</h3>

            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                <FaEnvelope />
                <span>support@shopease.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt />
                <span>+91 9876543210</span>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1" />
                <span>
                  India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-14 pt-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Subscribe to Newsletter</h3>

              <p className="text-gray-400 mt-2">
                Get latest offers, discounts and product updates.
              </p>
            </div>

            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  bg-slate-900
                  border
                  border-slate-700
                  px-4
                  py-3
                  rounded-l-xl
                  outline-none
                  w-full
                  md:w-80
                "
              />

              <button
                className="
                  bg-blue-600
                  px-6
                  rounded-r-xl
                  hover:bg-blue-700
                  transition
                  cursor-pointer
                "
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-gray-500">
          © 2026 ShopEase. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
