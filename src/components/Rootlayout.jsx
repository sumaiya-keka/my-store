import { Link, Outlet } from "react-router-dom";
import { useCartStore } from "../Store/CartStore";

function Rootlayout() {
  const cart = useCartStore((state) => state.cart);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md px-10 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-violet-600">
          MyStore
        </h1>

        <ul className="flex gap-8 font-medium text-gray-700 items-center">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/shop">Shop</Link>
          </li>

          <li className="relative">
            <Link to="/cart" className="text-xl">
              🛒
            </Link>

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {cart.length}
              </span>
            )}
          </li>

          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default Rootlayout;