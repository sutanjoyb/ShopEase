import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import {
  FaStar,
  FaShoppingCart,
  FaBolt,
  FaTruck,
  FaLock,
  FaUndoAlt,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-nunito">
      <Navbar />

      <main className="grow">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid lg:grid-cols-2 gap-10 p-8">
            <div className="relative">
              <span className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold z-10">
                {Math.round(product.discountPercentage)}% OFF
              </span>

              <img
                src={product.thumbnail}
                alt={product.title}
                className="
                  w-full
                  h-112.5
                  object-cover
                  rounded-2xl
                  hover:scale-105
                  transition-all
                  duration-500
                "
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold w-fit mb-4 capitalize">
                {product.category}
              </span>

              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                {product.title}
              </h1>

              <div className="flex items-center gap-2 mb-5">
                <FaStar className="text-yellow-400 text-xl" />

                <span className="font-semibold text-lg">{product.rating}</span>

                <span className="text-gray-500">Customer Rating</span>
              </div>

              <div className="mb-6">
                <h2 className="text-5xl font-extrabold text-blue-600">
                  ${product.price}
                </h2>
              </div>

              <div className="mb-6">
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
                  In Stock ({product.stock} Available)
                </span>
              </div>

              <div className="bg-gray-100 p-5 rounded-2xl mb-8">
                <h3 className="text-xl font-bold mb-3">Product Description</h3>

                <p className="text-gray-600 leading-8">{product.description}</p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    addToCart(product);
                    alert(`${product.title} added to cart`);
                  }}
                  className="
                    flex
                    items-center
                    gap-2
                    bg-linear-to-r
                    from-blue-600
                    to-indigo-600
                    text-white
                    px-8
                    py-4
                    rounded-xl
                    font-bold
                    hover:scale-105
                    transition-all
                    duration-300
                    shadow-lg
                    cursor-pointer
                  "
                >
                  <FaShoppingCart />
                  Add To Cart
                </button>

                <button
                  className="
                    flex
                    items-center
                    gap-2
                    border-2
                    border-blue-600
                    text-blue-600
                    px-8
                    py-4
                    rounded-xl
                    font-bold
                    hover:bg-blue-600
                    hover:text-white
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >
                  <FaBolt />
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div
              className="
                bg-white
                p-8
                rounded-2xl
                shadow-md
                hover:shadow-xl
                transition-all
                duration-300
                flex
                items-start
                gap-4
              "
            >
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <FaTruck className="text-2xl text-blue-600" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Fast Delivery
                </h3>

                <p className="text-gray-600">
                  Delivery available within 2–5 business days.
                </p>
              </div>
            </div>

            <div
              className="
                bg-white
                p-8
                rounded-2xl
                shadow-md
                hover:shadow-xl
                transition-all
                duration-300
                flex
                items-start
                gap-4
              "
            >
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <FaLock className="text-2xl text-green-600" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Secure Payment
                </h3>

                <p className="text-gray-600">
                  100% secure payment and checkout process.
                </p>
              </div>
            </div>

            <div
              className="
                bg-white
                p-8
                rounded-2xl
                shadow-md
                hover:shadow-xl
                transition-all
                duration-300
                flex
                items-start
                gap-4
              "
            >
              <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                <FaUndoAlt className="text-2xl text-purple-600" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Easy Returns
                </h3>

                <p className="text-gray-600">
                  Hassle-free return policy for eligible products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ProductDetails;
