import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import backUp from "../assets/images/backup.png";
import useTitle from "../hooks/useTitle";
import ProgressCircle from "../Components/ProgressCircle";
import ApiErrorCard from "../Components/ApiErrorCard";

const MovieDetails = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const params = useParams();
  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`;
  const image = data.poster_path
    ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
    : backUp;
  useEffect(() => {
    async function fetchMovie() {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    }
    fetchMovie();
  }, [url]);
  useTitle(data.original_title);

  if (isLoading) {
    return <ProgressCircle />;
  }

  if (isError) {
    return <ApiErrorCard />;
  }

  return (
    <main>
      <section className="flex justify-around flex-wrap py-7 mb-3">
        <div className="max-w-sm">
          <img className="rounded" src={image} alt={data.original_title} />
        </div>
        <div className="max-w-2xl dark:text-white text-gray-700 text-lg">
          <p className="text-4xl font-bold my-3 text-center lg:text-left">
            {data.original_title}
          </p>
          <p className="my-4">{data.overview}</p>
          <p className="my-7 flex flex-wrap gap-2">
            {data?.genres?.map((gen) => (
              <span
                key={gen.id}
                className=" p-2 rounded mr-2 border border-gray-300 dark:border-gray-700"
              >
                {gen.name}
              </span>
            ))}
          </p>
          <div class="my-3 flex items-center">
            <svg
              class="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p class="ms-2 text-gray-900 dark:text-white">
              {data.vote_average}
            </p>
            <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span class=" text-gray-900 dark:text-white">
              {data.vote_count} reviews
            </span>
          </div>
          <div className="my-4">
            <span className="font-bold">Runtime:</span>
            <span className="ms-2">{data?.runtime || "NA"} min.</span>
          </div>
          <div className="my-4">
            <span className="font-bold">Budget:</span>
            <span className="ms-2">{data?.budget || "NA"}</span>
          </div>
          <div className="my-4">
            <span className="font-bold">Revenue:</span>
            <span className="ms-2">{data?.revenue || "NA"}</span>
          </div>
          <div className="my-4">
            <span className="font-bold">Realease Date:</span>
            <span className="ms-2">{data?.release_date || "NA"}</span>
          </div>
          <div className="my-4">
            <span className="font-bold">Imdb Code:</span>
            <a
              href={`https://www.imdb.com/title/${data.imdb_id}`}
              rel="noreferrer"
              alt=""
              target="_blank"
              className="ms-2"
            >
              {data.imdb_id}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MovieDetails;
