import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import EventDetailsPage from './Pages/EventDetailsPage';
import Cart from './Components/Cart/Cart';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import { CartProvider } from './Context/CartContext';
import { DarkModeProvider } from './Context/DarkModeContext'; // Import DarkModeProvider

function App() {
  return (
    <Router>
      <DarkModeProvider>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/event-details" element={<EventDetailsPage />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </DarkModeProvider>
    </Router>
  );
}

export default App;
