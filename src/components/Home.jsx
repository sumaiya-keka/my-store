import { Link } from 'react-router-dom'
import { useCartStore } from "../Store/CartStore";

function Home() {

  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="px-10 py-16 bg-gray-100 min-h-screen">

      {/* Hero Section */}
      <div className="text-center mb-16">

        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome To MyStore
        </h2>

        <p className="text-gray-600 text-lg mb-8">
          Luxury beauty products with premium quality.
        </p>

        <Link
          to="/shop"
          className="bg-linear-to-r from-pink-500 to-pink-600 text-white px-8 py-3 rounded-xl hover:opacity-90 duration-300"
        >
          Shop Now
        </Link>

      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Card 1 */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 hover:-translate-y-2">

          <div className="overflow-hidden">
            <img
              className="w-full h-60 object-cover hover:scale-110 transition duration-300"
              src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=500&q=60"
              alt="perfume"
            />
          </div>

          <div className="p-5">

            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold">Chanel perfume</h3>
              <span className="text-lg font-bold text-pink-600">
                ৳350000
              </span>
            </div>

            <p className="text-gray-500 text-sm mb-4">
              Elegant luxury perfume.
            </p>

            <button
              onClick={() =>
                addToCart({ name: "Chanel perfume", price: 350000 })
              }
              className="w-full bg-linear-to-r from-pink-500 to-pink-600 text-white py-2 rounded-xl hover:opacity-90"
            >
             Buy
            </button>

          </div>

        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 hover:-translate-y-2">

          <div className="overflow-hidden">
            <img
              className="w-full h-60 object-cover hover:scale-110 transition duration-300"
              src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=500&q=60"
              alt="perfume"
            />
          </div>

          <div className="p-5">

            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold">Dior Perfume</h3>
              <span className="text-lg font-bold text-pink-600">
                ৳18000
              </span>
            </div>

            <p className="text-gray-500 text-sm mb-4">
              Long-lasting luxury fragrance.
            </p>

            <button
              onClick={() =>
                addToCart({ name: "Dior Perfume", price: 18000 })
              }
              className="w-full bg-linear-to-r from-pink-500 to-pink-600 text-white py-2 rounded-xl hover:opacity-90"
            >
              Buy
            </button>

          </div>

        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 hover:-translate-y-2">

          <div className="overflow-hidden">
            <img
              className="w-full h-60 object-cover hover:scale-110 transition duration-300"
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=500&q=60"
              alt="foundation"
            />
          </div>

          <div className="p-5">

            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold">Chanel beauty product</h3>
              <span className="text-lg font-bold text-pink-600">
                ৳12000
              </span>
            </div>

            <p className="text-gray-500 text-sm mb-4">
              Smooth flawless skin coverage.
            </p>

            <button
              onClick={() =>
                addToCart({ name: "Chanel beauty product", price: 12000 })
              }
              className="w-full bg-linear-to-r from-pink-500 to-pink-600 text-white py-2 rounded-xl hover:opacity-90"
            >
             Buy
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Home