import React from 'react';

const Header = () => {
  return (
    <header className='w-full flex h-[84px] justify-center items-center shadow-sm'>
      {/* Search Box */}
      <div className='relative w-[80%] max-w-[400px]'>
        <input
          type='text'
          placeholder='Search...'
          className='w-full h-[40px] px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <span className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35"
            />
          </svg>
        </span>
      </div>
    </header>
  );
};

export default Header;
