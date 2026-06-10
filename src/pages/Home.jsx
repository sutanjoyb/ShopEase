import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: 2499,
    },
    {
      id: 2,
      title: "Gaming Mouse",
      price: 1499,
    },
    {
      id: 3,
      title: "Mechanical Keyboard",
      price: 3999,
    },
    {
      id: 4,
      title: "Epson Printer",
      price: 8999,
    },
    {
      id: 5,
      title: "USB Connector",
      price: 499,
    },
    {
      id: 6,
      title: "Smart Watch",
      price: 1999,
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        ),
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }

    console.log("Added:", product.title);
  };

  return (
    <>
      <Navbar />

      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-10 hover:tracking-widest transition-all duration-500">
          Featured Products
        </h2>

        <p className="text-center text-xl font-semibold mb-6">
          Cart Items: {cartItems.length}
        </p>

        <div className="max-w-md mx-auto mb-10">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
