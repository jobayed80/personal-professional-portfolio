import React, { useState } from 'react';
import { Link } from 'react-scroll';

// Data for navigation links
import { navigation } from '../data';

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => setIsMobile(!isMobile);

  return (
    <nav className=" py-4">
      {/* Desktop and tablet navigation */}
      <ul className="hidden lg:flex space-x-10 capitalize text-[18px]">
        {navigation.map((item, index) => {
          return (
            <li
              className="text-white hover:text-pink-600 cursor-pointer text-md transform transition-all duration-300 ease-in-out hover:scale-105"
              key={index}
            >
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="transition-all duration-500"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Mobile navigation */}
      <div className="lg:hidden flex justify-between items-center">
        <div>
          <button
            className="text-white text-2xl"
            onClick={toggleMenu}
          >
            {isMobile ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <ul
        className={`flex flex-col space-y-4 items-center text-md capitalize bg-black text-white p-6 absolute top-20 right-4 transform transition-transform duration-500 ease-in-out ${isMobile ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {navigation.map((item, index) => {
          return (
            <li
              className="text-white hover:text-pink-600 cursor-pointer text-md transform transition-all duration-300 ease-in-out hover:scale-105"
              key={index}
            >
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="transition-all duration-500"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
