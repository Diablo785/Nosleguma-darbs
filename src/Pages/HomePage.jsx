// src/Pages/HomePage.js
import React from 'react';
import AutoCarousel from '../Components/HomePage/AutoCarousel';
import EventCard from '../Components/Event/EventCard';
import ContinueViewingCarousel from '../Components/HomePage/ContinueViewingCarousel';
import RecommendedCarousel from '../Components/HomePage/RecommendedCarousel';
import { useDarkMode } from '../Context/DarkModeContext'; 
import { CarouselProvider } from '../Context/CarouselContext'; // Import the CarouselProvider

const events = [
  {
    title: 'Concert A',
    date: '2024-09-20',
    location: 'New York, NY',
    image: 'https://cdn.ticketshop.lv/event/6306/5f3e6ef9f6352bb42765f8f1fb71fa76/1000x500.jpg',
  },
  {
    title: 'Comedy Show B',
    date: '2024-10-05',
    location: 'Los Angeles, CA',
    image: 'https://cdn.ticketshop.lv/event/6306/5f3e6ef9f6352bb42765f8f1fb71fa76/1000x500.jpg',
  },
  {
    title: 'Casdasd',
    date: '2024-10-05',
    location: 'wergwergwggfsdf',
    image: 'https://cdn.ticketshop.lv/event/6306/5f3e6ef9f6352bb42765f8f1fb71fa76/1000x500.jpg',
  },
  {
    title: 'wergwerg',
    date: '2024-10-05',
    location: 'wergewrg',
    image: 'https://cdn.ticketshop.lv/event/6306/5f3e6ef9f6352bb42765f8f1fb71fa76/1000x500.jpg',
  },
  {
    title: 'wergwerg',
    date: '2024-10-05',
    location: 'wergewrg',
    image: 'https://cdn.ticketshop.lv/event/6306/5f3e6ef9f6352bb42765f8f1fb71fa76/1000x500.jpg',
  },
  {
    title: 'wergwerg',
    date: '2024-10-05',
    location: 'wergewrg',
    image: 'https://cdn.ticketshop.lv/event/6306/5f3e6ef9f6352bb42765f8f1fb71fa76/1000x500.jpg',
  },
  {
    title: 'wergwerg',
    date: '2024-10-05',
    location: 'wergewrg',
    image: 'https://cdn.ticketshop.lv/event/6306/5f3e6ef9f6352bb42765f8f1fb71fa76/1000x500.jpg',
  },
];

const Homepage = () => {
  const { darkMode } = useDarkMode();

  return (
    <CarouselProvider>
      <div className={`w-full min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
        <AutoCarousel items={events} />

        <ContinueViewingCarousel events={events} carouselId="continueViewingCarousel" />
        <RecommendedCarousel events={events} carouselId="recommendedCarousel" />


      </div>
    </CarouselProvider>
  );
};

export default Homepage;
