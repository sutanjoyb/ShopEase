import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-linear-to-r from-blue-600 via-indigo-600 to-purple-700 text-white min-h-[70vh] md:min-h-[80vh] flex items-center justify-center px-4 sm:px-6 w-full font-montserrat py-12 md:py-0">
      <div className="absolute top-10 left-10 w-48 h-48 md:w-72 md:h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 md:w-72 md:h-72 bg-white/10 rounded-full blur-3xl"></div>

      <div className="text-center max-w-4xl z-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 md:mb-6 tracking-tight">
          Welcome to <span className="text-yellow-300">ShopEase</span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-100 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto">
          Discover amazing products, unbeatable deals, and a seamless shopping
          experience — all in one place.
        </p>

        <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
          <button
            onClick={() => navigate("/products")}
            className="bg-white text-blue-700 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            Shop Now
          </button>

          <button
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="border-2 border-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-blue-700 transition-all duration-300 cursor-pointer"
          >
            Learn More
          </button>
        </div>

        <div className="mt-10 md:mt-12 flex justify-center gap-6 sm:gap-10 text-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">1000+</h2>
            <p className="text-gray-200 text-xs sm:text-sm">Products</p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">500+</h2>
            <p className="text-gray-200 text-xs sm:text-sm">Customers</p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">24/7</h2>
            <p className="text-gray-200 text-xs sm:text-sm">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
