import React from 'react';
import { Link } from 'react-router-dom';
import { useAutoCarousel } from '../../Context/AutoCarouselContext';

const AutoCarousel = ({ items }) => {
  const { currentIndex, goToNextSlide, goToPrevSlide, setCurrentSlide } = useAutoCarousel(items);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full relative">
            <div
              className="absolute top-0 left-0 h-full w-[70%] z-10"
              style={{
                background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))',
              }}
            ></div>

            <img
              src={item.image || 'https://cdn.ticketshop.lv/event/6306/5f3e6ef9f6352bb42765f8f1fb71fa76/1000x500.jpg'}
              alt={item.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute left-[60px] top-1/2 transform -translate-y-1/2 z-20 w-[30%] text-white p-4">
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="text-lg mt-2">{item.date}</p>
              <p className="text-md mt-1">{item.location}</p>
              <Link
                to={{
                  pathname: `/event-details`,
                  state: { event: item },
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 inline-block"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full z-30"
      >
        &#10094;
      </button>

      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full z-30"
      >
        &#10095;
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center z-30">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 mx-1 rounded-full ${
              currentIndex === index ? 'bg-blue-600' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoCarousel;
