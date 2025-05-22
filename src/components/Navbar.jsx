import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-black text-green-500 text-transform: uppercase">
            To do
          </Link>

          <div className="flex space-x-6">
            <Link
              to="/"
              className={`transition-all duration-200 ${
                isActive("/")
                  ? "text-green-700 font-medium"
                  : "text-white-600 hover:text-green-600"
              }`}
            >
              Home
            </Link>
            <Link
              to="/todo"
              className={`transition-all duration-200 ${
                isActive("/todos")
                  ? "text-green-700 font-medium"
                  : "text-white-600 hover:text-green-600"
              }`}
            >
              Todos
            </Link>
            <Link
              to="/about"
              className={`transition-all duration-200 ${
                isActive("/about")
                  ? "text-green-700 font-medium"
                  : "text-white-600 hover:text-green-600"
              }`}
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
