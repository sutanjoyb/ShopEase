import { useState, useEffect, useContext } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

import { CartContext } from "../context/CartContext";

import { FaTruck, FaShieldAlt, FaGem, FaUsers } from "react-icons/fa";

function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#030712]">

      <div className="bg-gray-50 flex flex-col grow">
        <Navbar />

        <Hero />

        <section className="max-w-7xl mx-auto px-6 py-16 w-full">
          <h2 className="text-4xl font-bold text-center mb-10">
            Featured Products
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["all", "beauty", "fragrances", "furniture", "groceries"].map(
              (cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-3 rounded-xl capitalize font-medium transition cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white"
                      : "bg-white shadow text-gray-700"
                  }`}
                >
                  {cat}
                </button>
              ),
            )}
          </div>

          <div className="max-w-md mx-auto mb-10">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="
                w-full
                border
                border-gray-300
                rounded-xl
                px-4
                py-3
                outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.thumbnail}
                price={product.price}
                rating={product.rating}
                onAddToCart={() => addToCart(product)}
              />
            ))}
          </div>
        </section>

        <section
          id="about"
          className="
            bg-linear-to-b
            from-white
            via-blue-50
            to-indigo-100
            py-24
            px-6
          "
        >
          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-20">
              <span
                className="
                  bg-blue-100
                  text-blue-700
                  px-5
                  py-2
                  rounded-full
                  text-sm
                  font-semibold
                "
              >
                Why Choose ShopEase?
              </span>

              <h2
                className="
                  text-5xl
                  md:text-6xl
                  font-extrabold
                  mt-6
                  mb-6
                  text-gray-900
                "
              >
                Built For Modern
                <span className="text-blue-600"> Shopping</span>
              </h2>

              <p
                className="
                  max-w-3xl
                  mx-auto
                  text-lg
                  text-gray-600
                  leading-8
                "
              >
                ShopEase delivers a seamless online shopping experience with
                premium products, trusted brands, secure payments, and fast
                delivery.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div
                className="
                  bg-white
                  p-8
                  rounded-3xl
                  shadow-lg
                  hover:-translate-y-2
                  hover:shadow-2xl
                  transition
                "
              >
                <FaTruck className="text-4xl text-blue-600 mb-5" />

                <h3 className="text-2xl font-bold mb-4">Fast Delivery</h3>

                <p className="text-gray-600">
                  Get your products delivered quickly with real-time tracking.
                </p>
              </div>

              <div
                className="
                  bg-white
                  p-8
                  rounded-3xl
                  shadow-lg
                  hover:-translate-y-2
                  hover:shadow-2xl
                  transition
                "
              >
                <FaGem className="text-4xl text-purple-600 mb-5" />

                <h3 className="text-2xl font-bold mb-4">Premium Quality</h3>

                <p className="text-gray-600">
                  Carefully selected products with top quality standards.
                </p>
              </div>

              <div
                className="
                  bg-white
                  p-8
                  rounded-3xl
                  shadow-lg
                  hover:-translate-y-2
                  hover:shadow-2xl
                  transition
                "
              >
                <FaShieldAlt className="text-4xl text-green-600 mb-5" />

                <h3 className="text-2xl font-bold mb-4">Secure Payments</h3>

                <p className="text-gray-600">
                  Shop confidently with secure checkout and customer protection.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-20">
              <div className="bg-white p-6 rounded-2xl shadow text-center">
                <h3 className="text-4xl font-bold text-blue-600">1000+</h3>
                <p>Products</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow text-center">
                <h3 className="text-4xl font-bold text-purple-600">500+</h3>
                <p>Customers</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow text-center">
                <h3 className="text-4xl font-bold text-green-600">24/7</h3>
                <p>Support</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow text-center">
                <h3 className="text-4xl font-bold text-orange-500">99%</h3>
                <p>Satisfaction</p>
              </div>
            </div>

            <div
              className="
                mt-20
                bg-linear-to-r
                from-blue-600
                to-indigo-700
                rounded-3xl
                p-10
                text-center
                text-white
              "
            >
              <FaUsers className="text-5xl mx-auto mb-5" />

              <h3 className="text-4xl font-bold mb-4">
                Join Thousands of Happy Customers
              </h3>

              <p className="max-w-3xl mx-auto text-blue-100 mb-8">
                Experience hassle-free shopping with trusted products and
                lightning-fast delivery.
              </p>

              <button
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                className="
                  bg-white
                  text-blue-700
                  px-8
                  py-4
                  rounded-full
                  font-bold
                  hover:scale-105
                  transition
                  cursor-pointer
                "
              >
                Explore Products
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
