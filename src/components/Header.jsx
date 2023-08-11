import { useState } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDropdown1Open, setIsDropdown1Open] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);
  const [isDropdown3Open, setIsDropdown3Open] = useState(false);

  const closeDropdowns = () => {
    setIsDropdown1Open(false);
    setIsDropdown2Open(false);
    setIsDropdown3Open(false);
  };

  const toggleDropdown1 = () => {
    setIsDropdown1Open(!isDropdown1Open);
    setIsDropdown2Open(false);
    setIsDropdown3Open(false);
  };

  const toggleDropdown2 = () => {
    setIsDropdown1Open(false);
    setIsDropdown2Open(!isDropdown2Open);
    setIsDropdown3Open(false);
  };

  const toggleDropdown3 = () => {
    setIsDropdown1Open(false);
    setIsDropdown2Open(false);
    setIsDropdown3Open(!isDropdown3Open);
  };

  return (
    <header className="bg-white border-b border-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-bold text-orange-500">
              Group 2 Cookbook
            </Link>
          </div>
          <div className="flex items-center justify-end flex-grow">
            <SearchBar />
          </div>
        </div>

        <div className="flex justify-start">
          <div className="mt-4 space-x-10">
            <div
              className="relative inline-block text-left"
              onMouseEnter={() => setIsDropdown1Open(true)}
              onClick={toggleDropdown1}
            >
              <div>
                <button className="inline-flex justify-center w-full px-10 py-2 text-sm font-medium text-gray-700 bg-transparent border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none">
                  <span className="text-lg">Dropdown 1</span>
                </button>
              </div>
              <div
                className={`${
                  isDropdown1Open ? "block" : "hidden"
                } origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
                onMouseLeave={() => setIsDropdown1Open(false)}
              >
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Item 1
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Item 2
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Item 3
                  </a>
                </div>
              </div>
            </div>
            <div
              className="relative inline-block text-left"
              onMouseEnter={() => setIsDropdown2Open(true)}
              onClick={toggleDropdown2}
            >
              <div>
                <button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-transparent border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none">
                  <span className="text-lg">Dropdown 2</span>
                </button>
              </div>
              <div
                className={`${
                  isDropdown2Open ? "block" : "hidden"
                } origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
                onMouseLeave={() => setIsDropdown2Open(false)}
              >
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Item 1
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Item 2
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Item 3
                  </a>
                </div>
              </div>
            </div>
            <div
              className="relative inline-block text-left"
              onMouseEnter={() => setIsDropdown3Open(true)}
              onClick={toggleDropdown3}
            >
              <div>
                <button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-transparent border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none">
                  <span className="text-lg">Dropdown 3</span>
                </button>
              </div>
              <div
                className={`${
                  isDropdown3Open ? "block" : "hidden"
                } origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
                onMouseLeave={() => setIsDropdown3Open(false)}
              >
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Item 1
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Item 2
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Item 3
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
