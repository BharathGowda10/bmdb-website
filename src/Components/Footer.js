import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white shadow-sm dark:bg-gray-800 border-t-2 border-gray-200 dark:border-gray-200 dark:border-t-1 ">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <Link to="/" className="hover:underline">
            BMDB™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="/"
              target="_blank"
              className="hover:underline me-4 md:me-6"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="/"
              target="_blank"
              className="hover:underline me-4 md:me-6"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="/"
              target="_blank"
              className="hover:underline me-4 md:me-6"
            >
              Youtube
            </a>
          </li>
          <li>
            <a href="/" target="_blank" className="hover:underline">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
