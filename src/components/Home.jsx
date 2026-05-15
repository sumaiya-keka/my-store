import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

function Home() {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="px-10 py-16">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome To MyStore
        </h2>

        <p className="text-gray-600 text-lg mb-8">
          Best products with amazing prices.
        </p>

        <Link
          to="/shop"
          className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-lg duration-300"
        >
          Shop Now
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Product 1 */}
        <div className="bg-white rounded-2xl shadow-md p-5">
          <img
            className="rounded-xl mb-4"
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            alt="shoe"
          />

          <h3 className="text-2xl font-bold mb-2">
            Nike Shoe
          </h3>

          <p className="mb-4 text-gray-500">৳ 1200</p>

          <button
            onClick={() =>
              addToCart({
                name: "Nike Shoe",
                price: 12000,
              })
            }
            className="bg-violet-600 text-white px-5 py-2 rounded-lg"
          >
            Buy
          </button>
        </div>

        {/* Product 2 */}
        <div className="bg-white rounded-2xl shadow-md p-5">
          <img
            className="rounded-xl mb-4"
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="watch"
          />

          <h3 className="text-2xl font-bold mb-2">
            Smart Watch
          </h3>

          <p className="mb-4 text-gray-500">৳ 25000</p>

          <button
            onClick={() =>
              addToCart({
                name: "Smart Watch",
                price: 2500,
              })
            }
            className="bg-violet-600 text-white px-5 py-2 rounded-lg"
          >
            Buy
          </button>
        </div>

        {/* Product 3 */}
        <div className="bg-white rounded-2xl shadow-md p-5">
          <img
            className="rounded-xl mb-4"
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
            alt="phone"
          />

          <h3 className="text-2xl font-bold mb-2">
            iPhone
          </h3>

          <p className="mb-4 text-gray-500">৳ 80000</p>

          <button
            onClick={() =>
              addToCart({
                name: "iPhone",
                price: 800000,
              })
            }
            className="bg-violet-600 text-white px-5 py-2 rounded-lg"
          >
            Buy
          </button>
        </div>

      </div>
    </div>
  );
}

export default Home;