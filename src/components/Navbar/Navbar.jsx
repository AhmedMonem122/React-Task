import { useState } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="mr-auto">
            <Link to="/">React</Link>
          </div>
          <ul
            className={`flex items-center absolute  flex-col bg-white w-full shadow-md md:static md:bg-none md:flex-row md:shadow-none md:w-auto transition-all ${
              isOpen ? "top-full" : "top-[-135%]"
            }`}
          >
            <li className="mr-2">
              <Link
                to="/"
                className="text-gray-800 hover:text-blue-400 duration-500"
              >
                Home
              </Link>
            </li>
            <li className="mr-2">
              <Link
                to="/categories"
                className="text-gray-800 hover:text-blue-400 duration-500"
              >
                Categories
              </Link>
            </li>
            <li className="mr-2">
              <Link
                to="/contact"
                className="text-gray-800 hover:text-blue-400 duration-500"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div
            className="cursor-pointer md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaXmark /> : <FaBarsStaggered />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
