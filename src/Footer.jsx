import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral border-t border-black fixed bottom-0 w-full">
      <div className="max-w-screen-xl mx-auto py-6 px-4 flex justify-between">
        <div className="flex items-center space-x-4">
          {/* Add your social media icons here */}
          <a href="#" className="text-gray-500 hover:text-orange-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Insert your social media icon here */}
            </svg>
          </a>
          {/* Add more social media icons */}
        </div>
        <div className="flex items-center">
          <div className="px-4 py-2">Subscribe to our Newsletter</div>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded-md ml-2"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
