import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "../Pages/MovieList";
import Search from "../Pages/Search";
import MovieDetails from "../Pages/MovieDetails";
import PageNotFound from "../Pages/PageNotFound";

const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
      <Routes>
        <Route
          path="/"
          element={<MovieList apiPath="movie/now_playing" pageTitle="Home" />}
        />
        <Route
          path="/movie/top"
          element={
            <MovieList apiPath="movie/top_rated" pageTitle="Top Rated" />
          }
        />
        <Route
          path="/movie/upcoming"
          element={<MovieList apiPath="movie/upcoming" pageTitle="Upcoming" />}
        />
        <Route
          path="/movie/popular"
          element={<MovieList apiPath="movie/popular" pageTitle="Popular" />}
        />
        <Route path="/search" element={<Search apiPath="search/movie" />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
