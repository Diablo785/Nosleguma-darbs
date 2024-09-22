import { createContext, useState, useContext } from 'react';

// Create a new context
const CarouselContext = createContext();

export const useCarousel = () => {
  return useContext(CarouselContext);
};

export const CarouselProvider = ({ children }) => {
  const [carousels, setCarousels] = useState({});

  const initializeCarousel = (id) => {
    if (!carousels[id]) {
      setCarousels((prev) => ({
        ...prev,
        [id]: {
          currentIndex: 0,
          goToNextSlide: (items, cardsToShow) => {
            setCarousels((prev) => {
              const newIndex = prev[id].currentIndex + 1;
              console.log(`Next Slide: ${newIndex} (Total: ${items.length}), CardsToShow: ${cardsToShow}`);
              return newIndex <= items.length - cardsToShow
                ? {
                    ...prev,
                    [id]: { ...prev[id], currentIndex: newIndex },
                  }
                : prev; // Prevent index from going out of bounds
            });
          },
          goToPrevSlide: (items) => {
            setCarousels((prev) => {
              const newIndex = prev[id].currentIndex - 1;
              console.log(`Previous Slide: ${newIndex}`);
              return newIndex >= 0
                ? {
                    ...prev,
                    [id]: { ...prev[id], currentIndex: newIndex },
                  }
                : prev; // Prevent index from going below zero
            });
          },
        },
      }));
    }
  };

  const updateCarouselIndex = (id, newIndex) => {
    console.log(`Updating Carousel Index: ${newIndex} for ID: ${id}`);
    setCarousels((prev) => ({
      ...prev,
      [id]: { ...prev[id], currentIndex: newIndex },
    }));
  };

  return (
    <CarouselContext.Provider value={{ initializeCarousel, carousels, updateCarouselIndex }}>
      {children}
    </CarouselContext.Provider>
  );
};
