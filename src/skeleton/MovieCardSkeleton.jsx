import SkeletonLoader from "./SkeletonLoader";

const MovieCardSkeleton = () => {
  return (
    <div
      style={{ height: "900px" }}
      className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 animate-pulse"
    >
      <SkeletonLoader width="350px" height="525px" className="rounded-t-lg" />
      <div className="p-5">
        <SkeletonLoader width="310px" height="32px" className="mb-2" />
        <SkeletonLoader width="310px" height="240px" className="mb-3" />
      </div>
    </div>
  );
};

export default MovieCardSkeleton;
