import React from "react";
import MovieCard from "../Components/MovieCard";
import useFetch from "../hooks/useFetch";
import useTitle from "../hooks/useTitle";
import ProgressCircle from "../Components/ProgressCircle";
import ApiErrorCard from "../Components/ApiErrorCard";

const MovieList = ({ apiPath, pageTitle }) => {
  const { data: movies, isLoading, isError } = useFetch(apiPath);
  useTitle(pageTitle);

  if (isLoading) {
    return <ProgressCircle />;
  }
  if (isError) {
    return <ApiErrorCard />;
  }
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-evenly flex-wrap">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MovieList;
