import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const safeNumber = (n) => Number.isFinite(Number(n)) ? Number(n) : 0;
const formatRs = (n) => `Rs. ${safeNumber(n).toLocaleString('en-LK')}`;

export default function CartPage() {
  const { items, totals, removeItem, updateQty, clear } = useCart();

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-900 to-black border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-6 py-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Your <span className="text-yellow-400">Cart</span>
          </h1>
          <p className="text-gray-300 mt-3">Review your items and proceed to checkout.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.length === 0 ? (
            <div className="text-center bg-gray-900/50 border border-gray-800 rounded-2xl p-10">
              <ShoppingCart className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
              <p className="text-gray-300 mb-6">Your cart is empty.</p>
              <Link
                to="/menu"
                className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold py-3 px-6 rounded-full hover:from-yellow-400 hover:to-yellow-500 transition"
              >
                Browse Menu
              </Link>
            </div>
          ) : (
            items.map((item) => {
              const priceNum = safeNumber(item.priceNumber);
              const lineTotal = priceNum * safeNumber(item.qty);

              return (
                <div
                  key={item.id}
                  className="flex items-center gap-4 bg-gray-900/50 border border-gray-800 rounded-2xl p-4"
                >
                  <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-white font-semibold">{item.name}</h3>

                    {/* exact item price from mock.js */}
                    <p className="text-yellow-400 font-bold mt-1">
                      {item.priceLabel ?? formatRs(priceNum)}
                    </p>

                    <div className="mt-3 flex items-center gap-3">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-700 text-white hover:bg-gray-800"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="text-white min-w-6 text-center">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-700 text-white hover:bg-gray-800"
                      >
                        <Plus size={16} />
                      </button>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-4 inline-flex items-center gap-1 text-red-400 hover:text-red-300"
                      >
                        <Trash2 size={16} />
                        <span>Remove</span>
                      </button>

                      {/* Line total */}
                      <span className="ml-auto text-white font-semibold">
                        {formatRs(lineTotal)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Summary */}
        <aside className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 h-fit">
          <h2 className="text-white text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2 text-gray-300">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatRs(totals.subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>{formatRs(totals.tax)}</span>
            </div>
            <div className="border-t border-gray-800 my-3" />
            <div className="flex justify-between text-white text-lg font-bold">
              <span>Total</span>
              <span>{formatRs(totals.total)}</span>
            </div>
          </div>

          <div className="mt-6 grid gap-3">
            <button
              disabled={items.length === 0}
              onClick={() => {
                // TODO: integrate backend later (create checkout session)
                alert('Checkout coming soon! (API integration placeholder)');
              }}
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-semibold py-3 rounded-lg transition disabled:opacity-50"
            >
              Place Order
            </button>
            <button
              onClick={clear}
              disabled={items.length === 0}
              className="w-full border border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800 font-semibold py-3 rounded-lg transition disabled:opacity-50"
            >
              Clear Cart
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            * Later, validate prices server-side before creating a payment session.
          </p>
        </aside>
      </div>
    </div>
  );
}
