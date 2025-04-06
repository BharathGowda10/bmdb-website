import React from "react";
import pageNotFoundImage from "../assets/images/pagenotfound.png";
import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const PageNotFound = () => {
  useTitle("Page Not Found");
  return (
    <main>
      <section className="flex flex-col justify-center py-7">
        <div className="flex flex-col my-4 items-center">
          <p className="text-7xl mb-2 text-gray-700 dark:text-white font-bold">
            404! 👀ops...
          </p>
          <img
            className=" my-7 max-w-lg rounded"
            src={pageNotFoundImage}
            alt="pageNotFound"
          />
        </div>
        <div className="flex justify-center ms-1">
          <Link to="/">
            <button
              type="button"
              class="w-96 text-white bg-gradient-to-br from-purple-600 to-blue-500 
            hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300
             dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3.5 text-center me-2 mb-2"
            >
              Back To Home
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
export default PageNotFound;
