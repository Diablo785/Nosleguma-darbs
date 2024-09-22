// src/Components/Layout/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-[-35px] ">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} TickEtopia. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
