import React, { useState } from 'react';
import ImagePopUp from '../PopUps/ImagePopUp'; // Adjust path as needed

const CartItem = ({ item, handleRemoveOne, handleRemoveAll, handleAddOne }) => {
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);

  const handleImageClick = () => {
    setImagePopupOpen(true);
  };

  const handleClosePopup = () => {
    setImagePopupOpen(false);
  };

  return (
    <>
      <tr className="bg-white dark:bg-gray-800">
        <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-100 flex items-center">
          <img
            src={item.event.image}
            alt="Event"
            className="w-[35%] h-[35%] inline mr-2 cursor-pointer"
            onClick={handleImageClick}
          />
          {item.event.title}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-100">{item.event.date}</td>
        <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-100">{item.event.location}</td>
        <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-100">{item.ticketType}</td>
        <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-100">{item.quantity}</td>
        <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-100">${(item.price * item.quantity).toFixed(2)}</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex space-x-5">
            <button
              onClick={handleRemoveOne}
              className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700 text-sm"
            >
              -1
            </button>
            <button
              onClick={handleRemoveAll}
              className="bg-red-600 text-white py-1 px-2 rounded hover:bg-red-800 text-sm"
            >
              -all
            </button>
            <button
              onClick={handleAddOne}
              className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-700 text-sm"
            >
              +1
            </button>
          </div>
        </td>
      </tr>
      <ImagePopUp
        isOpen={isImagePopupOpen}
        onClose={handleClosePopup}
        imageUrl={item.event.image}
      />
    </>
  );
};

export default CartItem;
