import React, { useState } from 'react';

const EventDetails = ({ event, handleAddToCart, darkMode }) => {
  const [ticketType, setTicketType] = useState('General Admission');
  const [quantity, setQuantity] = useState(1);

  // Define ticket options and their corresponding prices
  const ticketOptions = [
    { type: 'General Admission', price: 50 },
    { type: 'VIP', price: 100 }
  ];

  // Get the selected ticket's price
  const selectedTicket = ticketOptions.find((ticket) => ticket.type === ticketType);
  const ticketPrice = selectedTicket ? selectedTicket.price : 50;

  return (
    <div className="lg:w-1/2 flex flex-col justify-between">
      {/* Basic Event Info */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{event.title}</h1>
        <p className="text-xl mb-2">{event.date}</p>
        <p className="text-lg mb-6">{event.location}</p>
        <p className="text-lg mb-8">{event.description}</p>
      </div>

      {/* Ticket Info */}
      <div className="p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Buy Tickets</h3>
        <div className="mb-4">
          <label htmlFor="ticketType" className="block text-lg mb-2">
            Ticket Type:
          </label>
          <select
            id="ticketType"
            value={ticketType}
            onChange={(e) => setTicketType(e.target.value)}
            className={`w-full p-2 border rounded ${
              darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'
            }`}
          >
            {ticketOptions.map((ticket) => (
              <option key={ticket.type} value={ticket.type}>
                {ticket.type}{" "}
                {/* Spaces added before price for alignment */}
                {" ".repeat(50 - ticket.type.length)}€{ticket.price}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="block text-lg mb-2">
            Quantity:
          </label>
          <select
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className={`w-full p-2 border rounded ${
              darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'
            }`}
          >
            {[1, 2, 3, 4, 5].map((qty) => (
              <option key={qty} value={qty}>
                {qty}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold text-green-500">€{ticketPrice * quantity}</p>
          <button
            onClick={() => handleAddToCart(ticketType, quantity, ticketPrice)}
            className={`bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded ${
              darkMode ? 'shadow-md' : 'shadow-lg'
            }`}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
