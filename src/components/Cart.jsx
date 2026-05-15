import { useCartStore } from "../store/cartStore";

function Cart() {
  const cart = useCartStore((state) => state.cart);

  const removeFromCart = useCartStore(
    (state) => state.removeFromCart
  );

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6">
        🛒 Your Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">
          Cart is empty
        </p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white shadow p-4 rounded-lg"
            >
              <div>
                <h3 className="font-semibold">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  ৳ {item.price}
                </p>
              </div>

              <button
                onClick={() => removeFromCart(index)}
                className="bg-red-900 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-6 text-xl font-bold">
          Total: ৳ {total}
        </div>
      )}
    </div>
  );
}

export default Cart;