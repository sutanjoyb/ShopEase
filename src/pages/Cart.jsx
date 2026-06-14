import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-nunito">
      <Navbar />

      <main className="grow max-w-6xl mx-auto w-full px-6 py-10">
        <h1 className="text-4xl text-center font-bold mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-xl text-gray-500 my-32">
            Your cart is empty!!!
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-xl shadow-md flex items-center justify-between animate-fade-in"
                >
                  <div className="flex items-center gap-5">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div>
                      <h2 className="text-xl font-semibold">{item.title}</h2>
                      <p className="text-blue-600 font-bold text-lg">
                        ${item.price}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(index)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-3">Cart Summary</h2>
              <p className="text-lg">Total Items: {cartItems.length}</p>
              <p className="text-2xl font-bold text-blue-600 mt-2">
                Total Price: ${totalPrice.toFixed(2)}
              </p>
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Cart;
