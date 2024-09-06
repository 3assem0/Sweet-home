import React, { useState } from 'react';
import { MemoryRouter, Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { FaAngleDown } from "react-icons/fa6";
import { CiMenuFries, CiMenuBurger } from 'react-icons/ci'; // Import both icons
import "./NavBar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <MemoryRouter>
      <header className="w-full h-[46px] bg-transparent mt-10 flex justify-center items-center mx-auto">
        <nav className="w-[90%] bg-transparent flex justify-between items-center">
          <div className="flex gap-3 justify-center items-center">
            <img src={logo} alt="Logo" />
            <p className="text-base font-bold" style={{ color: '#1B1C57' }}>Hunter</p>
          </div>

          {/* Desktop Links */}
          <div className="flex items-center max-[438px]:hidden gap-5">
            <Link to="/about-us" className="no-underline bg-transparent text-white rounded-[32px] border p-2 px-4">
              About Us
            </Link>
            <Link to="/article" className="no-underline bg-transparent text-white rounded-[32px] border p-2 px-4">
              Article
            </Link>
            <Link to="/property" className="no-underline bg-transparent text-white rounded-[32px] border flex items-center gap-3 p-2 px-4">
              Property <FaAngleDown />
            </Link>
            <div className="ml-4">
              <button className="rounded-[32px] p-3 px-4" style={{ backgroundColor: '#d1fae5', color: '#047857' }}>
                Sign Up!
              </button>
            </div>
          </div>

          {/* Menu Icon for Mobile */}
          <div className="cursor-pointer MenuIcon" onClick={toggleMenu}>
            {isOpen ? (
              <CiMenuFries className="text-4xl" />
            ) : (
              <CiMenuBurger className="text-4xl" />
            )}
          </div>
        </nav>
      </header>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <ul
          className="absolute bg-white shadow-lg right-5 top-24 flex flex-col items-center justify-center p-3 gap-5 z-[9999999] rounded-lg mt-2 w-48 text-black text-center transition-all duration-300 ease-in-out max-h-96 opacity-100 overflow-hidden"
        >
          <Link to="/about-us" className="no-underline bg-transparent text-black rounded-[32px] p-2 px-4">
            About Us
          </Link>
          <Link to="/article" className="no-underline bg-transparent text-black rounded-[32px] p-2 px-4">
            Article
          </Link>
          <Link to="/property" className="no-underline bg-transparent text-black rounded-[32px] flex items-center gap-3 p-2 px-4">
            Property <FaAngleDown />
          </Link>
          <div className="ml-4">
            <button className="rounded-[32px] p-3 px-4" style={{ backgroundColor: '#d1fae5', color: '#047857' }}>
              Sign Up!
            </button>
          </div>
        </ul>
      )}
    </MemoryRouter>
  );
};

export default Navbar;
