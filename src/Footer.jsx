import React from "react";
import facebook from './images/facebook.svg';
import instagram from './images/instagram.svg';
import pinterest from './images/pinterest.svg';
import twitter from './images/twitter.svg';
import youtube from './images/youtube.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-black fixed bottom-0 w-full flex items-center justify-between py-4 px-4">
      <div className="flex items-center space-x-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-500"
        >
          <img
            src={facebook}
            alt="Facebook Icon"
            className="h-6 w-6 rounded-full border border-gray-300"
          />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-500"
        >
          <img
            src={instagram}
            alt="Instagram Icon"
            className="h-6 w-6 rounded-full border border-gray-300"
          />
        </a>
        <a
          href="https://pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-500"
        >
          <img
            src={pinterest}
            alt="Pinterest Icon"
            className="h-6 w-6 rounded-full border border-gray-300"
          />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-500"
        >
          <img
            src={twitter}
            alt="Twitter Icon"
            className="h-6 w-6 rounded-full border border-gray-300"
          />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-500"
        >
          <img
            src={youtube}
            alt="YouTube Icon"
            className="h-6 w-6 rounded-full border border-gray-300"
          />
        </a>
      </div>
      <div className="flex items-center">
        <div className="mr-4">
          <span className="font-bold mb-2">Get our Newsletter</span><br />
          <span className="text-sm">
            Get recipes, tips, and special offers delivered straight to your inbox.
            Opt out or <span className="underline">contact</span> us anytime. See our{" "}
            <span className="underline">Privacy Policy.</span>
          </span>
        </div>
        <form className="flex items-center">
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
    </footer>
  );
};

export default Footer;
