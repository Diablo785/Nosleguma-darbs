import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from '../Hooks/UseCart';
import { useDarkMode } from '../Context/DarkModeContext';
import EventDetails from '../Components/Event/EventDetails'; // Adjust path as needed
import ImagePopUp from '../Components/PopUps/ImagePopUp'; // Adjust path as needed

const EventDetailsPage = () => {
  const location = useLocation();
  const { event } = location.state || {};
  const { addToCart } = useCart();
  const { darkMode } = useDarkMode(); // Use dark mode context
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);

  if (!event) {
    return <div>Event not found.</div>;
  }

  const handleAddToCart = (ticketType, quantity, ticketPrice) => {
    addToCart({
      event,
      ticketType,
      quantity,
      price: ticketPrice
    });
  };

  const handleImageClick = () => {
    setImagePopupOpen(true);
  };

  const handleClosePopup = () => {
    setImagePopupOpen(false);
  };

  return (
    <div className={`min-h-screen p-20 flex flex-col items-center justify-center relative ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="absolute inset-0 z-[-1]" />

      <div
        className={`container mx-auto max-w-6xl p-6 mt-12 ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} rounded-lg shadow-lg mb-6`}
      >
        <div className="flex flex-col lg:flex-row lg:space-x-8 h-full">
          <div className="lg:w-1/2 mb-6 lg:mb-0 flex justify-center items-center">
            <img
              className="w-auto h-full object-cover rounded-lg shadow-md cursor-pointer"
              src={event.image}
              alt={event.title}
              onClick={handleImageClick}
            />
            <ImagePopUp
              isOpen={isImagePopupOpen}
              onClose={handleClosePopup}
              imageUrl={event.image}
            />
          </div>

          <EventDetails
            event={event}
            handleAddToCart={handleAddToCart}
            darkMode={darkMode}
          />
        </div>
      </div>

      <div
        className={`container mx-auto max-w-3xl p-6 ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} rounded-lg shadow-lg flex flex-col items-center justify-center text-center`}
      >
        <h3 className="text-xl font-semibold mb-4">Venue Information</h3>
        <p className="text-lg mb-2">Melno Cepurīšu Balerija</p>
        <p className="text-lg">Raiņa iela 28, Jelgava</p>
        <p className="text-lg">Email: barsmcb@gmail.com</p>
        <p className="text-lg">Phone: +371 27787776</p>

        <div className="w-full h-64 bg-gray-300 rounded mt-4">
          <p className="text-center pt-20">Google Maps Placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
