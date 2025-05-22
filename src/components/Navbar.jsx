import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-purple-700">To do</Link>
          
          <div className="flex space-x-6">
            <Link 
              to="/" 
              className={`transition-all duration-200 ${isActive('/') 
                ? 'text-purple-700 font-medium' 
                : 'text-gray-600 hover:text-purple-600'}`}
            >
              Home
            </Link>
            <Link 
              to="/todos" 
              className={`transition-all duration-200 ${isActive('/todos') 
                ? 'text-purple-700 font-medium' 
                : 'text-gray-600 hover:text-purple-600'}`}
            >
              Todos
            </Link>
            <Link 
              to="/about" 
              className={`transition-all duration-200 ${isActive('/about') 
                ? 'text-purple-700 font-medium' 
                : 'text-gray-600 hover:text-purple-600'}`}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
