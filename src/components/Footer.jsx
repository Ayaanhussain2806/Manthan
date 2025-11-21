import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Logo */}
        <div>
          <div className="flex items-center mb-4">
            <div className="h-10 w-10 bg-cyan-500 rounded-full flex items-center justify-center font-bold text-white text-lg">
              NLP
            </div>
            <span className="ml-3 text-xl font-semibold text-white">EdgeNLP</span>
          </div>
          <p className="text-gray-400">
            Optimized NLP models for edge devices. Fast, lightweight, accurate AI.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-cyan-400 cursor-pointer">Home</li>
            <li className="hover:text-cyan-400 cursor-pointer">About</li>
            <li className="hover:text-cyan-400 cursor-pointer">Models</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Connect</h3>
          <div className="flex gap-4 text-2xl text-gray-400">
            <FaGithub className="cursor-pointer hover:text-cyan-400 transition" />
            <FaLinkedin className="cursor-pointer hover:text-cyan-400 transition" />
            <FaTwitter className="cursor-pointer hover:text-cyan-400 transition" />
          </div>
        </div>
      </div>

      <div className="bg-gray-800 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} EdgeNLP — Optimized NLP for Edge Devices.
      </div>
    </footer>
  );
}
