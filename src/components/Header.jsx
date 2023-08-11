import { useState } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Header = () => {
  // really just a workaround to have all 3 dropdowns sync...
  const [dropdownState, setDropDownState] = useState([false, false, false]);

  const toggleState = (index) => {
    const newState = dropdownState.map((st, i) => (i === index ? !st : false));
    setDropDownState(newState);
  };

  const toggleAllOff = () => {
    setDropDownState([false, false, false]);
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
              onMouseEnter={() => setDropDownState([true, false, false])}
              onClick={() => toggleState(0)}
            >
              <div>
                <button className="inline-flex justify-center w-full px-10 py-2 text-sm font-medium text-gray-700 bg-transparent border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none">
                  <span className="text-lg">What to cook today</span>
                </button>
              </div>
              <div
                className={`${
                  dropdownState[0] ? "block" : "hidden"
                } origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
                onMouseLeave={() => toggleAllOff()}
              >
                <div className="py-1">
                  <div className="px-4 py-2 font-bold">Our recommendations</div>
                  <Link
                    to="/recipe/1rAAGGMt6tGMttXQN2y7tw"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Tomacca Salad
                  </Link>
                  <Link
                    to="/recipe/1Q1S7ojEM8PZPU2XxliMhx"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Smashed Cucumber Salad
                  </Link>
                  <Link
                    to="/recipe/15BH2v4FKpop21fOLgdfG9"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Zucchini Salad
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="relative inline-block text-left"
              onMouseEnter={() => setDropDownState([false, true, false])}
              onClick={() => toggleState(1)}
            >
              <div>
                <button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-transparent border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none">
                  <span className="text-lg">Healthy</span>
                </button>
              </div>
              <div
                className={`${
                  dropdownState[1] ? "block" : "hidden"
                } origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
                onMouseLeave={() => toggleAllOff()}
              >
                <div className="py-1">
                  <Link
                    to="/recipe/1Q1S7ojEM8PZPU2XxliMhx"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Smashed Cucumber Salad
                  </Link>
                  <Link
                    to="/recipe/15BH2v4FKpop21fOLgdfG9"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Zucchini Salad
                  </Link>
                  <Link
                    to="/recipe/pYoW6CIEqPWfqAwYLyUf8"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Juicy Lucy Burger
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="relative inline-block text-left"
              onMouseEnter={() => setDropDownState([false, false, true])}
              onClick={() => toggleState(2)}
            >
              <div>
                <button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-transparent border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none">
                  <span className="text-lg">Every Day</span>
                </button>
              </div>
              <div
                className={`${
                  dropdownState[2] ? "block" : "hidden"
                } origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
                onMouseLeave={() => toggleAllOff()}
              >
                <div className="py-1">
                  <Link
                    to="/recipe/1rAAGGMt6tGMttXQN2y7tw"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Tomacca Salad
                  </Link>
                  <Link
                    to="/recipe/pYoW6CIEqPWfqAwYLyUf8"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Juicy Lucy Burger
                  </Link>
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
