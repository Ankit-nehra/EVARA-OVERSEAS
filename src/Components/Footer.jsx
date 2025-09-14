import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

import logo from "../assets/finally-3.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-gray-100 to-white border-t border-gray-200 shadow-inner mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">

        {/* Logo & Social */}
        <div>
          <img src={logo} alt="EVARA Logo" className="h-14 mb-4" />
          <p className="mb-4 text-sm">Your one-stop destination for premium home textiles.</p>

          {/* Social Links */}
          <div className="flex space-x-4 text-white">
            <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-blue-400 p-2 rounded-full hover:bg-blue-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition">
              <FaInstagram />
            </a>
            <a href="#" className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition">
              <FaWhatsapp />
            </a>
            <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-blue-900 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <p className="text-sm mb-2">📧 Ayush@evaraoverseas.com</p>
          <p className="text-sm mb-2">📞 +91 70150 87558</p>
          <p className="text-sm">🏠 Panipat, Haryana, India</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-200 text-center py-3 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} EVARA Overseas. All rights reserved.
      </div>
    </footer>
  );
}
