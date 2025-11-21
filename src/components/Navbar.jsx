import React from "react";
import { FaHome, FaInfoCircle, FaBrain, FaSignInAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-gray-200 shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center cursor-pointer">
        <div className="h-10 w-10 bg-cyan-500 rounded-full flex items-center justify-center font-bold text-white text-lg">
          NLP
        </div>
        <span className="ml-3 text-xl font-semibold text-white">EdgeNLP</span>
      </div>

      {/* Menu */}
      <div className="flex items-center gap-8 text-lg font-medium">
        <div className="flex items-center gap-2 cursor-pointer hover:text-cyan-400 transition">
          <FaHome className="text-cyan-400" />
          <span>Home</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-cyan-400 transition">
          <FaInfoCircle className="text-cyan-400" />
          <span>About</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-cyan-400 transition">
          <FaBrain className="text-cyan-400" />
          <span>Models</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-cyan-400 transition">
          <FaSignInAlt className="text-cyan-400" />
          <span>Login</span>
        </div>
      </div>
    </nav>
  );
}
