import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, [id]);

  const addToCart = () => {
    if (!product) return;
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(product);
    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert(`${product.title} added to cart!`);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center text-3xl font-bold font-outfit">
        Loading Product...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-outfit">
      <Navbar />

      <main className="grow flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-16 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-2xl shadow-lg">
            <div>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-96 object-cover rounded-xl shadow-sm"
              />
            </div>

            <div>
              <h1 className="text-4xl font-bold mb-4 text-gray-900">
                {product.title}
              </h1>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {product.description}
              </p>
              <p className="text-3xl font-bold text-blue-600 mb-4">
                ${product.price}
              </p>
              <div className="space-y-2 mb-6 text-gray-700">
                <p className="text-lg">
                  ⭐ Rating:{" "}
                  <span className="font-semibold">{product.rating}</span>
                </p>
                <p className="text-lg">
                  📦 Category:{" "}
                  <span className="font-semibold capitalize">
                    {product.category}
                  </span>
                </p>
              </div>

              <button
                onClick={addToCart}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 cursor-pointer font-semibold"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ProductDetails;
