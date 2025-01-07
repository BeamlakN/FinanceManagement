import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaWallet } from 'react-icons/fa'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`w-full px-8 py-4 bg-blue-900 fixed shadow-md z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
       <FaWallet className="w-8 h-8 text-blue-700" />
       </div>

        <nav className="hidden md:flex space-x-6 text-sm font-medium text-white ml-auto">
          <a href="#home" className="hover:text-yellow-400">
            Home
          </a>
          <a href="#services" className="hover:text-yellow-400">
            Services
          </a>
          <a href="#how-it-works" className="hover:text-yellow-400">
            How It Works
          </a>
          <a href="#testimonals" className="hover:text-yellow-400">
            Testimonial
          </a>
          <a href="#contact-us" className="hover:text-yellow-400">
            Contact Us
          </a>
        </nav>

        {/* Mobile Controls (Button + Hamburger Menu) */}
        <div className="flex items-center space-x-4 ml-auto">
          {/* Mobile "Sign Up" Button */}
          <Link
            to="/signup"
            className="md:hidden px-4 py-2 text-sm font-medium text-white bg-orange-400 rounded-lg hover:bg-yellow-400"
          >
            Sign up
          </Link>

          {/* Hamburger Menu */}
          <button
            className="md:hidden flex items-center text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Buttons for Desktop */}
        <div className="hidden md:flex items-center space-x-4 ml-8">
          <Link
            to="/login"
            className="text-sm font-medium text-white hover:text-yellow-400"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 text-sm font-medium text-white bg-orange-400 rounded-lg hover:bg-yellow-400"
          >
            Sign up
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-4 text-sm font-medium text-white">
            <li>
              <a href="#home" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-yellow-400">
                Services
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:text-yellow-400">
                How It Works
              </a>
            </li>
            <li>
              <a href="#testimonals" className="hover:text-yellow-400">
                Testimonal
              </a>
            </li>
            <li>
              <a href="#contact-us" className="hover:text-yellow-400">
                Contact Us
              </a>
            </li>
            <li>
              <Link
                to="/login"
                className="text-sm font-medium text-white hover:text-yellow-400"
              >
                Log in
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
