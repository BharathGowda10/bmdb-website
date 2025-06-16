import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const Search = lazy(() => import("../Pages/Search"));
const MovieDetails = lazy(() => import("../Pages/MovieDetails"));
const PageNotFound = lazy(() => import("../Pages/PageNotFound"));
const ProgressCircle = lazy(() => import("../Components/ProgressCircle"));
const ErrorBoundary = lazy(() => import("../Components/ErrorBoundary"));
const MovieList = lazy(() => import("../Pages/MovieList"));
const ApiErrorCard = lazy(() => import("../Components/ApiErrorCard"));

const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
      <ErrorBoundary fallback={<ApiErrorCard />}>
        <Suspense fallback={<ProgressCircle />}>
          <Routes>
            <Route
              path="/"
              element={
                <MovieList apiPath="movie/now_playing" pageTitle="Home" />
              }
            />
            <Route
              path="/movie/top"
              element={
                <MovieList apiPath="movie/top_rated" pageTitle="Top Rated" />
              }
            />
            <Route
              path="/movie/upcoming"
              element={
                <MovieList apiPath="movie/upcoming" pageTitle="Upcoming" />
              }
            />
            <Route
              path="/movie/popular"
              element={
                <MovieList apiPath="movie/popular" pageTitle="Popular" />
              }
            />
            <Route path="/search" element={<Search apiPath="search/movie" />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default AllRoutes;
