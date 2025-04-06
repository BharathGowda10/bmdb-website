import React from "react";
import { Link } from "react-router-dom";
import backUp from "../assets/images/backup.png";

const MovieCard = ({ movie }) => {
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : backUp;
  return (
    <main>
      <div
        style={{ height: "900px" }}
        className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
      >
        <Link to={`/movie/${movie.id}`}>
          <img
            className="rounded-t-lg"
            src={image}
            alt={movie.original_title}
          />
        </Link>
        <div className="p-5">
          <Link to={`/movie/${movie.id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movie.original_title}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {movie.overview}
          </p>
        </div>
      </div>
    </main>
  );
};

export default MovieCard;
