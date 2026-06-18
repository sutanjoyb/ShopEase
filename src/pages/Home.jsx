import { useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";

function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { addToCart } = useContext(CartContext);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error("ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
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
    return (
      <div className="min-h-screen flex justify-center items-center text-3xl font-bold font-montserrat">
        Loading Products...
      </div>
    );
  }

  return (
    <div className="font-montserrat min-h-screen flex flex-col">
      <Navbar />
      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-16 grow w-full">
        <h2 className="text-4xl font-bold text-center mb-10">
          Featured Products
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["all", "beauty", "fragrances", "furniture", "groceries"].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg cursor-pointer capitalize transition-colors ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800"
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
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.thumbnail}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>
      </section>

      <section
        id="about"
        className="bg-linear-to-b from-white to-blue-50 py-24 px-6 w-full"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gray-800 hover:scale-105 transition duration-500">
              About ShopEase
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-8">
              ShopEase is your trusted destination for discovering quality
              products at affordable prices. Designed with simplicity and
              convenience in mind, our platform offers a seamless shopping
              experience for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer">
              <h3 className="text-2xl font-bold mb-3">Fast Delivery</h3>
              <p className="text-gray-600">
                Receive your orders quickly with our reliable delivery network
                and efficient logistics support.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer">
              <h3 className="text-2xl font-bold mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                We partner with trusted brands to ensure every product meets
                high quality standards.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer">
              <h3 className="text-2xl font-bold mb-3">Secure Shopping</h3>
              <p className="text-gray-600">
                Shop confidently with secure payments and privacy-focused
                protection for every transaction.
              </p>
            </div>
          </div>

          <div className="mt-20 bg-white rounded-3xl shadow-xl p-10 text-center hover:shadow-2xl transition-all duration-500">
            <h3 className="text-3xl font-bold mb-4">
              Why Customers Choose ShopEase?
            </h3>

            <p className="text-gray-600 text-lg leading-8 max-w-4xl mx-auto">
              With a clean interface, trusted products, secure checkout, and
              customer-first approach, ShopEase makes online shopping simple,
              enjoyable, and reliable. We continuously improve our platform to
              provide the best experience possible.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
