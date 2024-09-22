import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cartItems, updateItemQuantity, removeFromCart } = useContext(CartContext);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 dark:bg-gray-800 p-6 relative">
      {/* Cart Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-6xl"> {/* Increased max-w */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Shopping Cart</h2>
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="border-b dark:border-gray-700">
              <th className="px-6 py-3 text-gray-600 dark:text-gray-300">Event</th>
              <th className="px-6 py-3 text-gray-600 dark:text-gray-300">Date</th>
              <th className="px-6 py-3 text-gray-600 dark:text-gray-300">Location</th>
              <th className="px-6 py-3 text-gray-600 dark:text-gray-300">Ticket Type</th>
              <th className="px-6 py-3 text-gray-600 dark:text-gray-300">Quantity</th>
              <th className="px-6 py-3 text-gray-600 dark:text-gray-300">Total Price</th>
              <th className="px-6 py-3 text-gray-600 dark:text-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <CartItem
                  key={index}
                  item={item}
                  handleRemoveOne={() => updateItemQuantity(index, -1)}
                  handleRemoveAll={() => removeFromCart(index)}
                  handleAddOne={() => updateItemQuantity(index, 1)}
                />
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500 dark:text-gray-400">
                  Your cart is empty.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Summary Box */}
      {cartItems.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-80 absolute right-6 top-1/2 transform -translate-y-1/2">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Order Summary</h3>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600 dark:text-gray-300">Total:</span>
            <span className="text-lg font-bold text-gray-900 dark:text-gray-100">${totalPrice.toFixed(2)}</span>
          </div>
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;