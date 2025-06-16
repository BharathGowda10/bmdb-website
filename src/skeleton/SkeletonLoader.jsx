import React from "react";

const SkeletonLoader = ({
  height = "20px",
  width = "100%",
  className = "",
}) => {
  return (
    <div
      style={{ height, width }}
      className={`bg-gray-300 dark:bg-gray-700 rounded animate-pulse ${className}`}
    ></div>
  );
};

export default SkeletonLoader;
