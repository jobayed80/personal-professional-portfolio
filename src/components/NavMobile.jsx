import React, { useState } from 'react';
import { navigation } from '../data';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

// New icons for each section
import { FaHome, FaUser, FaTools, FaEnvelope, FaProjectDiagram, FaBriefcase } from 'react-icons/fa';

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Framer motion variants for animations
  const circleVariants = {
    hidden: {
      scale: 0
    },
    visible: {
      scale: 180,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 60
      }
    }
  };

  const ulVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      }
    }
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className='relative overflow-x-hidden'>
      {/* Open menu button */}
      <div onClick={() => setIsOpen(true)} className="cursor-pointer text-white">
        <HiOutlineMenuAlt3 className="w-8 h-8" />
      </div>

      {/* Circle animation */}
      <motion.div
        variants={circleVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : 'hidden'}
        className='w-4 h-4 bg-slate-900 rounded-full fixed top-0 right-0'>
      </motion.div>

      {/* Mobile menu with gradient background and extra content on left and right */}
      <motion.ul
        variants={ulVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : 'hidden'}
        className={`${isOpen ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-full 
          flex flex-col items-center justify-center overflow-hidden transition-all duration-500 
          bg-gradient-to-r from-gray-900 via-gray-600 to-white`}>
        
        {/* Left content: Example Logo */}
        <div className="absolute left-8 top-8 text-white text-xl">
          <p>Your Logo</p> {/* You can replace this with an image or any content */}
        </div>

        {/* Right content: Example Contact Icon */}
        <div className="absolute right-8 top-8 text-white text-xl">
          <FaEnvelope /> {/* You can add any other icon or text */}
        </div>

        {/* Close button */}
        <div onClick={() => setIsOpen(false)} className="cursor-pointer top-8 right-8 absolute text-white">
          <IoMdClose className='w-8 h-8' />
        </div>

        {/* Navigation items with icons and hover effects */}
        {navigation.map((item, index) => {
          // Icon mapping based on the navigation item (update based on your actual items)
          const icon = item.name === 'Home' ? <FaHome /> :
            item.name === 'About' ? <FaUser /> :
            item.name === 'Services' ? <FaTools /> :
            item.name === 'Projects' ? <FaProjectDiagram /> :
            item.name === 'Work' ? <FaBriefcase /> :
            item.name === 'Contact' ? <FaEnvelope /> : null;

          return (
            <li key={index} className='mb-8'>
              <Link
                to={item.href}
                smooth={true}
                duration={500}
                offset={-70}
                className='text-xl text-white cursor-pointer capitalize flex items-center space-x-2 transition-all duration-300 hover:text-pink-300 hover:scale-110'
                onClick={handleLinkClick}
              >
                {icon && <span className="text-2xl">{icon}</span>} {/* Show icon */}
                <span>{item.name}</span>
              </Link>
            </li>
          );
        })}
      </motion.ul>
    </nav>
  );
};

export default NavMobile;
