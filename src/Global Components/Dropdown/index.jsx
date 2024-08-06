import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('Yearly');
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="dropdown-button flex items-center py-1 px-4 rounded-full focus:outline-none focus:ring-2"
        onClick={handleToggle}
      >
        {selectedOption}
        <svg
          className="w-4 h-4 inline-block ml-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-full rounded-md shadow-lg dropmenu">
          <button
            type="button"
            className="block w-full text-left px-4 py-2 text-gray-700 focus:outline-none"
            onClick={() => handleSelect('Yearly')}
          >
            Yearly
          </button>
          <button
            type="button"
            className="block w-full text-left px-4 py-2 text-gray-700  focus:outline-none"
            onClick={() => handleSelect('Monthly')}
          >
            Monthly
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
