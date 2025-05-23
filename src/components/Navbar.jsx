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
          <Link to="/" className="text-xl font-black text-green-500 uppercase">
            To do
          </Link>

          <div className="flex space-x-6">
            <Link
              to="/"
              className={`transition-all duration-200 ${
                isActive("/")
                  ? "text-green-400 underline underline-offset-4"
                  : "text-gray-400 hover:text-green-300"
              }`}
            >
              Home
            </Link>
            <Link
              to="/todo"
              className={`transition-all duration-200 ${
                isActive("/todo")
                  ? "text-green-400 underline underline-offset-4"
                  : "text-gray-400 hover:text-green-300"
              }`}
            >
              Todos
            </Link>
            <Link
              to="/about"
              className={`transition-all duration-200 ${
                isActive("/about")
                  ? "text-green-400 underline underline-offset-4"
                  : "text-gray-400 hover:text-green-300"
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
