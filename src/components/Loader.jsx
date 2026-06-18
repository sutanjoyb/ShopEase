function Loader() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div
        className="
          w-16
          h-16
          border-4
          border-blue-600
          border-t-transparent
          rounded-full
          animate-spin
        "
      ></div>

      <p className="mt-4 text-xl font-semibold text-gray-700">Loading...</p>
    </div>
  );
}

export default Loader;
