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

      <main className="grow max-w-6xl mx-auto w-full px-4 sm:px-6 py-6 md:py-10">
        <h1 className="text-3xl md:text-4xl text-center font-bold mb-6 md:mb-8">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-lg md:text-xl text-gray-500 my-20 md:my-32">
            Your cart is empty!!!
          </div>
        ) : (
          <>
            <div className="space-y-4 md:space-y-6">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 md:p-5 rounded-xl shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4 md:gap-5">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded-lg shrink-0"
                    />
                    <div>
                      <h2 className="text-lg md:text-xl font-semibold line-clamp-1">
                        {item.title}
                      </h2>
                      <p className="text-blue-600 font-bold text-base md:text-lg">
                        ${item.price}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(index)}
                    className="w-full sm:w-auto bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition cursor-pointer text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 md:mt-10 bg-white p-5 md:p-6 rounded-xl shadow-md">
              <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">
                Cart Summary
              </h2>
              <p className="text-base md:text-lg">
                Total Items: {cartItems.length}
              </p>
              <p className="text-xl md:text-2xl font-bold text-blue-600 mt-1 md:mt-2">
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
