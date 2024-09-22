import { useState, useEffect, useRef } from 'react';

export const useAutoCarousel = (items, interval = 10000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const startAutoSlide = () => {
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);
  };

  const resetAutoSlide = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(timerRef.current);
  }, [items.length]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    resetAutoSlide();
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    resetAutoSlide();
  };

  const setCurrentSlide = (index) => {
    setCurrentIndex(index);
    resetAutoSlide();
  };

  return {
    currentIndex,
    goToNextSlide,
    goToPrevSlide,
    setCurrentSlide,
  };
};
