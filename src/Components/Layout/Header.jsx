import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useCart } from '../../Context/CartContext'; 
import { useDarkMode } from '../../Context/DarkModeContext';

const Header = () => {
  const location = useLocation();
  const { cartItems } = useCart(); 
  const { darkMode, setDarkMode } = useDarkMode();
  const [language, setLanguage] = React.useState('LV');

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <header className="sticky top-0 bg-gray-800 dark:bg-gray-900 text-white dark:text-gray-300 p-4 z-50">
      <div className="container mx-auto flex flex-col">
        {/* Top Section: Title, Cart, Language, Dark Mode Switch */}
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-2xl font-bold">TickEtopia</h1>
          <div className="flex items-center space-x-6">
            <Link
              to="/cart"
              className={`relative ${location.pathname === '/cart' ? 'text-blue-400' : ''} transition-all`}
            >
              <img
                className="w-10 h-10 invert"
                src="/Assets/Images/Cart.png"
                alt="Cart"
              />
              <span className={`absolute left-1/2 -bottom-1 w-0 h-1 bg-blue-400 transition-all transform -translate-x-1/2 ${location.pathname === '/cart' ? 'w-full' : ''} ease-in-out`}></span>
              <div
                className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 bg-red-500 text-white text-l font-bold rounded-full"
                style={{ transform: 'translate(25%, -25%)' }}
              >
                {cartItems.length}
              </div>
            </Link>
            <button
              onClick={() => setLanguage(language === 'LV' ? 'EN' : 'LV')}
              className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded"
            >
              {language === 'LV' ? 'EN' : 'LV'}
            </button>
            <DarkModeSwitch
              className="dark-mode-switch"
              checked={darkMode}
              onChange={toggleDarkMode}
              size={45}
            />
          </div>
        </div>

        {/* Bottom Section: Event Genres (Home button for now) */}
        <div className="flex justify-center">
          <Link
            to="/"
            className={`relative text-white text-xl ${location.pathname === '/' ? 'text-blue-400' : ''} transition-all`}
          >
            Home
            <span className={`absolute left-1/2 -bottom-1 w-0 h-1 bg-blue-400 transition-all transform -translate-x-1/2 ${location.pathname === '/' ? 'w-full' : ''} ease-in-out`}></span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
