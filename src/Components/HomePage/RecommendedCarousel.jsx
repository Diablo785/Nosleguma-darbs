import React, { useEffect, useRef, useState } from 'react';
import { useCarousel } from '../../Context/CarouselContext';
import EventCard from '../Event/EventCard';

const RecommendedCarousel = ({ events, carouselId }) => {
    const { initializeCarousel, carousels } = useCarousel();
    const cardRef = useRef(null);
    const [cardsToShow, setCardsToShow] = useState(5);
  
    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;
  
        if (width < 625) {
          setCardsToShow(1);
        } else if (width < 925) {
          setCardsToShow(2);
        } else if (width < 1225) {
          setCardsToShow(3);
        } else if (width < 1525) {
          setCardsToShow(4);
        } else {
          setCardsToShow(5);
        }
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    useEffect(() => {
      initializeCarousel(carouselId);
    }, [initializeCarousel, carouselId]);
  
    const { currentIndex = 0, goToNextSlide, goToPrevSlide } = carousels[carouselId] || {};
  
    const cardWidth = cardRef.current ? cardRef.current.offsetWidth : 0;
    const translateX = -(currentIndex * cardWidth);
  
    return (
      <div className="my-8 text-center">
        <h2 className="text-2xl mb-4">Recommended Events</h2>
        <div className="relative w-full flex items-center justify-center">
          <button 
            onClick={() => goToPrevSlide(events)} 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 border border-white rounded-full z-30 transition-transform duration-300 hover:bg-gray-700" 
            disabled={currentIndex === 0}
          >
            &#10094;
          </button>
          <div className="w-full overflow-hidden">
            <div 
              className="flex transition-transform duration-300" 
              style={{ transform: `translateX(${translateX}px)` }} 
            >
              {events.map((event, index) => (
                <div 
                  key={index} 
                  className={`flex-shrink-0 ${
                    cardsToShow === 1 ? 'w-full' : 
                    cardsToShow === 2 ? 'w-[calc(100%/2)]' : 
                    cardsToShow === 3 ? 'w-[calc(100%/3)]' : 
                    cardsToShow === 4 ? 'w-[calc(100%/4)]' : 
                    'w-[calc(100%/5)]'
                  }`} 
                  ref={index === 0 ? cardRef : null} 
                >
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          </div>
          <button 
            onClick={() => goToNextSlide(events, cardsToShow)} 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 border border-white rounded-full z-30 transition-transform duration-300 hover:bg-gray-700" 
            disabled={currentIndex >= events.length - cardsToShow}
          >
            &#10095;
          </button>
        </div>
      </div>
    );
  };

export default RecommendedCarousel;
