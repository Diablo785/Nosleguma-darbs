import React from 'react';
import ReactDOM from 'react-dom';

const ImagePopUp = ({ isOpen, onClose, imageUrl }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl h-full max-h-[70%] max-w-[75%] bg-white rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent click event from bubbling up to the overlay
      >
        <img
          src={imageUrl}
          alt="Full-size"
          className="w-full h-full object-cover"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
        >
          &times;
        </button>
      </div>
    </div>, document.body
  );
};

export default ImagePopUp;
