import { Link } from "react-router-dom";

import { FaShoppingBag, FaTruck, FaShieldAlt, FaStar } from "react-icons/fa";

function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-linear-to-r
        from-blue-700
        via-indigo-700
        to-purple-700
        text-white
      "
    >

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span
              className="
                bg-white/20
                backdrop-blur-md
                px-4
                py-2
                rounded-full
                text-sm
                font-semibold
              "
            >
              #1 Online Shopping Destination
            </span>

            <h1
              className="
                text-5xl
                md:text-7xl
                font-extrabold
                mt-6
                leading-tight
              "
            >
              Shop Smarter.
              <br />
              Live Better.
            </h1>

            <p
              className="
                text-lg
                md:text-xl
                text-blue-100
                mt-6
                leading-8
                max-w-2xl
              "
            >
              Discover thousands of premium products at unbeatable prices. Fast
              delivery, secure payments, and an amazing shopping experience.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/products"
                className="
                  bg-white
                  text-blue-700
                  px-8
                  py-4
                  rounded-xl
                  font-bold
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Shop Now
              </Link>

              <a
                href="#about"
                className="
                  border-2
                  border-white
                  px-8
                  py-4
                  rounded-xl
                  font-bold
                  hover:bg-white
                  hover:text-blue-700
                  transition-all
                  duration-300
                "
              >
                Learn More
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <h3 className="text-3xl font-extrabold">10K+</h3>
                <p className="text-blue-100">Products</p>
              </div>

              <div>
                <h3 className="text-3xl font-extrabold">5K+</h3>
                <p className="text-blue-100">Customers</p>
              </div>

              <div>
                <h3 className="text-3xl font-extrabold">99%</h3>
                <p className="text-blue-100">Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div
              className="
                bg-white/10
                backdrop-blur-lg
                rounded-3xl
                p-10
                w-full
                max-w-md
                border
                border-white/20
              "
            >
              <div className="space-y-6">
                <div
                  className="
                    flex
                    items-center
                    gap-4
                    bg-white/10
                    p-5
                    rounded-2xl
                  "
                >
                  <FaShoppingBag className="text-3xl" />

                  <div>
                    <h3 className="font-bold text-lg">Premium Products</h3>

                    <p className="text-blue-100 text-sm">
                      Carefully selected items.
                    </p>
                  </div>
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-4
                    bg-white/10
                    p-5
                    rounded-2xl
                  "
                >
                  <FaTruck className="text-3xl" />

                  <div>
                    <h3 className="font-bold text-lg">Fast Delivery</h3>

                    <p className="text-blue-100 text-sm">
                      Quick & reliable shipping.
                    </p>
                  </div>
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-4
                    bg-white/10
                    p-5
                    rounded-2xl
                  "
                >
                  <FaShieldAlt className="text-3xl" />

                  <div>
                    <h3 className="font-bold text-lg">Secure Payments</h3>

                    <p className="text-blue-100 text-sm">
                      100% protected checkout.
                    </p>
                  </div>
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-4
                    bg-white/10
                    p-5
                    rounded-2xl
                  "
                >
                  <FaStar className="text-3xl" />

                  <div>
                    <h3 className="font-bold text-lg">Top Rated</h3>

                    <p className="text-blue-100 text-sm">Loved by thousands.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
