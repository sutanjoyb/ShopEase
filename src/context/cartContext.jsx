import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

    setCartItems(savedCart);
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cartItems, product];

    setCartItems(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    toast.success(`${product.title} added to cart`);
  };

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);

    setCartItems(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    toast.error("Item removed from cart");
  };

  const clearCart = () => {
    setCartItems([]);

    localStorage.removeItem("cart");

    toast.success("Cart cleared");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
