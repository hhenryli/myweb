import React from 'react';
import { Link } from "react-router-dom";

export default function Nav() {
  return(
    <nav className="fixed absolute bottom-4 left-1/2 -translate-x-1/2 justify-center flex px-8 py-3 bg-gray-200 z-50">
      <ul className="flex space-x-20 font-garamond">
          <li><Link to="/" className="text-gray-800 hover:underline">henry</Link></li>
          <li><Link to="/about" className="text-gray-800 hover:underline">about</Link></li>
          <li><Link to="/portfolio" className="text-gray-800 hover:underline">porfolio</Link></li>
          <li><Link to="/projects" className="text-gray-800 hover:underline">projects</Link></li>
          <li><Link to="/contact" className="text-gray-800 hover:underline">contact</Link></li>
      </ul>
    </nav>
  )
}