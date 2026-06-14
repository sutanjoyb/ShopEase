import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white min-h-[80vh] flex items-center justify-center px-6 w-full font-montserrat">
      <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

      <div className="text-center max-w-4xl z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Welcome to <span className="text-yellow-300">ShopEase</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
          Discover amazing products, unbeatable deals, and a seamless shopping
          experience — all in one place.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => navigate("/products")}
            className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            Shop Now
          </button>

          <button
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-700 transition-all duration-300 cursor-pointer"
          >
            Learn More
          </button>
        </div>

        <div className="mt-12 flex justify-center gap-10 text-center">
          <div>
            <h2 className="text-3xl font-bold">1000+</h2>
            <p className="text-gray-200 text-sm">Products</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">500+</h2>
            <p className="text-gray-200 text-sm">Customers</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">24/7</h2>
            <p className="text-gray-200 text-sm">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
