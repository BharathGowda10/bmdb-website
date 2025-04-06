import React from "react";

const ApiErrorCard = () => {
  return (
    <main className="flex justify-center items-start py-10">
      <div className="w-full max-w-md bg-red-100 border border-red-400 rounded-md p-4 text-red-700">
        <h2 className="text-lg font-bold mb-2">Error</h2>
        <p>An error occurred while processing your request.</p>
        <p className="text-sm mt-2">Please try again later or contact support.</p>
      </div>
    </main>
  );
};

export default ApiErrorCard;
