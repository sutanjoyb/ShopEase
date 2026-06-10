function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-32 text-center">
      <h2 className="text-6xl font-bold mb-4 animate-pulse">
        Welcome to ShopEase
      </h2>

      <p className="text-xl mb-8">Find it. Love it. Shop it.</p>

      <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold cursor-pointer hover:scale-110 hover:shadow-2xl transition-all duration-300">
        Shop Now
      </button>
    </section>
  );
}

export default Hero;
