import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

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

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(product);
    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert(`${product.title} added to cart`);
  };

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
      <div className="min-h-screen flex justify-center items-center text-3xl font-bold font-inter">
        Loading Products...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-inter">
      <Navbar />

      <main className="grow max-w-7xl mx-auto px-6 py-10 w-full">
        <h1 className="text-5xl font-bold text-center mb-10">All Products</h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10 w-full">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-96 border border-gray-300 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-60 border border-gray-300 px-4 py-3 rounded-xl bg-white outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 cursor-pointer"
          >
            <option value="all">All Categories</option>
            <option value="beauty">Beauty</option>
            <option value="fragrances">Fragrances</option>
            <option value="furniture">Furniture</option>
            <option value="groceries">Groceries</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
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

        {filteredProducts.length === 0 && (
          <div className="text-center text-2xl text-gray-500 mt-12">
            No products found.
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Products;
