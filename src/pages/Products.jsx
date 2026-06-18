import { useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [currentPage, setCurrentPage] = useState(1);

  const { addToCart } = useContext(CartContext);

  const productsPerPage = 8;

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

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const lastProductIndex = currentPage * productsPerPage;

  const firstProductIndex = lastProductIndex - productsPerPage;

  const currentProducts = filteredProducts.slice(
    firstProductIndex,
    lastProductIndex,
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="grow max-w-7xl mx-auto px-6 py-10 w-full">
        <h1 className="text-5xl font-bold text-center mb-10">All Products</h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-96 border border-gray-300 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-60 border border-gray-300 px-4 py-3 rounded-xl bg-white outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            <option value="all">All Categories</option>
            <option value="beauty">Beauty</option>
            <option value="fragrances">Fragrances</option>
            <option value="furniture">Furniture</option>
            <option value="groceries">Groceries</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentProducts.map((product) => (
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

        {filteredProducts.length > 0 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
            >
              Previous
            </button>

            <span className="font-bold">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Products;
