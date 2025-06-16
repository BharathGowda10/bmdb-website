import React, { Fragment } from "react";
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../Components/MovieCard";
import useTitle from "../hooks/useTitle";
import ProgressCircle from "../Components/ProgressCircle";
import ApiErrorCard from "../Components/ApiErrorCard";

const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies, isLoading, isError } = useFetch(apiPath, queryTerm);
  useTitle(`Search for ${queryTerm}`);
  if (isLoading) {
    return <ProgressCircle />;
  }
  if (isError) {
    return <ApiErrorCard />;
  }
  return (
    <main>
      <section className="px-3 py-4">
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length === 0
            ? `Results Not found for '${queryTerm}'`
            : `Results for '${queryTerm}'`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Fragment key={movie.id}>
              <MovieCard movie={movie} />
            </Fragment>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Search;
