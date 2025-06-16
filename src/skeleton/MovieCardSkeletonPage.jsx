import MovieCardSkeleton from "./MovieCardSkeleton";

const MovieCardSkeletonPage = () => {
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-evenly flex-wrap">
          {[...Array(9)].map((_, index) => (
            <MovieCardSkeleton key={index} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MovieCardSkeletonPage;
