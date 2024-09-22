import React from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../../Context/DarkModeContext';

const EventCard = ({ event }) => {
  const { darkMode } = useDarkMode();

  const imageUrl = 'https://www.bilesuserviss.lv/imageGenerator/eventDetails/32cd5c402fea14ce9c59499418b376bb.webp';

  if (!event) {
    return null;
  }

  return (
    <Link 
      to="/event-details"
      state={{ event }} 
      className={`relative block w-[300px] h-[400px] rounded overflow-hidden shadow-lg group ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10 flex flex-col items-center transition-transform duration-300 ease-in-out group-hover:scale-105">
        <h2 className="text-lg md:text-xl font-bold text-center">{event.title || 'Untitled Event'}</h2>
        <p className="text-sm md:text-xl text-center">{event.date || 'Date not available'}</p>
        <p className="text-sm md:text-xl text-center">{event.location || 'Location not available'}</p>
        <div className="text-center mt-2 relative">
          <div className="absolute inset-0"></div>
          <div className="relative z-10">
            <div className="border-t border-white mt-1 w-45 mx-auto"></div>
            <p className="text-lg md:text-xl font-bold text-blue-400">no {event.price ? `${event.price} EUR` : 'Price not available'}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
