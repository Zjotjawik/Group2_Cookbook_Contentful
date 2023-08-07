import React, { useState } from "react";

const Header = () => {
  const [isDropdown1Open, setIsDropdown1Open] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);
  const [isDropdown3Open, setIsDropdown3Open] = useState(false);

  const closeDropdowns = () => {
    setIsDropdown1Open(false);
    setIsDropdown2Open(false);
    setIsDropdown3Open(false);
  };

  return (
    <header className="bg-white border-b border-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <span className="text-3xl font-bold text-orange-500">Group 2 Cookbook</span>
          </div>
          <div className="flex items-center justify-center flex-grow">
            <input
              type="text"
              className="w-2/3 px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Search for Recipe"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md ml-2">Search</button>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="mt-4 space-x-4">
            <div
              className="relative inline-block text-left"
              onMouseEnter={() => setIsDropdown1Open(true)}
              onClick={closeDropdowns}
            >
              <div>
                <button
                  className="inline-flex justify-center w-full px-10 py-2 text-sm font-medium text-gray-700 bg-transparent border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none"
                >
                  Dropdown 1
                </button>
              </div>
              <div
                className={`${
                  isDropdown1Open ? "block" : "hidden"
                } origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
                onMouseLeave={() => setIsDropdown1Open(false)}
              >
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Item 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Item 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Item 3
                  </a>
                </div>
              </div>
            </div>
            <div
              className="relative inline-block text-left"
              onMouseEnter={() => setIsDropdown2Open(true)}
              onClick={closeDropdowns}
            >
              <div>
                <button
                  className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-transparent border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none"
                >
                  Dropdown 2
                </button>
              </div>
              <div
                className={`${
                  isDropdown2Open ? "block" : "hidden"
                } origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
                onMouseLeave={() => setIsDropdown2Open(false)}
              >
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Item 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Item 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Item 3
                  </a>
                </div>
              </div>
            </div>
            <div
              className="relative inline-block text-left"
              onMouseEnter={() => setIsDropdown3Open(true)}
              onClick={closeDropdowns}
            >
              <div>
                <button
                  className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-transparent border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none"
                >
                  Dropdown 3
                </button>
              </div>
              <div
                className={`${
                  isDropdown3Open ? "block" : "hidden"
                } origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
                onMouseLeave={() => setIsDropdown3Open(false)}
              >
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Item 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Item 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
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
