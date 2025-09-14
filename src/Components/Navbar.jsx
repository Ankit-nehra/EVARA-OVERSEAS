import { useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
import logo from '../assets/svg11.svg';
import LoginModal from "./LoginModal";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleLogin = () => setIsLoginOpen(!isLoginOpen);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/30 border-b border-white/20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
            <div className="flex-shrink-0">
                <img 
                src={logo} 
                alt="EVARA Overseas Logo"
                className="h-16 md:h-20 w-auto object-contain cursor-pointer"
                />
            </div>
            

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
            <a href="#">Home</a>

            {/* Dropdown */}
            <div className="relative group">
              <button
                className="hover:text-yellow-800"
                onClick={toggleDropdown}
              >
                Shop ▾
              </button>
              {isDropdownOpen && (
                <div className="absolute top-8 left-0 bg-white text-gray-800 shadow-lg rounded-md w-48 z-50">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Pillow Covers</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Bed Sheets</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Carpets</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Curtains</a>
                </div>
              )}
            </div>

            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-8 text-xl text-gray-700">
            <FaShoppingCart className="cursor-pointer"/>
            <FaUser className="cursor-pointer" onClick={toggleLogin} /> 

            {/* Hamburger - Mobile */}
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <IoClose /> : <IoMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-md rounded-md p-4 mt-2 space-y-2">
            <a href="#" className="block">Home</a>
            <div>
              <button
                onClick={toggleDropdown}
                className="w-full text-left"
              >
                Shop ▾
              </button>
              {isDropdownOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  <a href="#" className="block">Pillow Covers</a>
                  <a href="#" className="block">Bed Sheets</a>
                  <a href="#" className="block">Carpets</a>
                  <a href="#" className="block">Curtains</a>
                </div>
              )}
            </div>
            <a href="#" className="block">About</a>
            <a href="#" className="block">Contact</a>
          </div>
        )}
      </div>
      <LoginModal isOpen={isLoginOpen} onClose={toggleLogin} />
    </nav>
  );
}
