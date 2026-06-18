import { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
  const shippingFee = subtotal > 0 ? 5.99 : 0;
  const taxFee = subtotal * 0.08;

  const exactTotal = subtotal + shippingFee + taxFee;
  const roundedAllTotal = Math.round(exactTotal);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-nunito">
      <Navbar />

      <main className="grow max-w-6xl mx-auto w-full px-4 sm:px-6 py-6 md:py-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-gray-900 text-center lg:text-left">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-lg md:text-xl text-gray-500 my-20 md:my-32">
            Your cart is empty!!!
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

            <div className="lg:col-span-2 space-y-4 md:space-y-6">
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
                      <h2 className="text-lg md:text-xl font-semibold line-clamp-1 text-gray-800">
                        {item.title}
                      </h2>
                      <p className="text-blue-600 font-bold text-base md:text-lg">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(index)}
                    className="w-full sm:w-auto bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition cursor-pointer text-sm font-medium"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md lg:sticky lg:top-24">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 border-b pb-3">
                Order Summary
              </h2>

              <div className="space-y-3 text-base text-gray-600">
                <div className="flex justify-between">
                  <span>Total Items:</span>
                  <span className="font-medium text-gray-800">
                    {cartItems.length}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-medium text-gray-800">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping Fee:</span>
                  <span className="font-medium text-gray-800">
                    {shippingFee > 0 ? `$${shippingFee.toFixed(2)}` : "$0.00"}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Tax (Fees):</span>
                  <span className="font-medium text-gray-800">
                    ${taxFee.toFixed(2)}
                  </span>
                </div>

                <div className="border-t pt-4 flex justify-between items-center text-xl font-bold text-gray-900">
                  <span>All Total:</span>
                  <span className="text-blue-600">${roundedAllTotal}</span>
                </div>
              </div>

              <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition cursor-pointer text-center">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Cart;
