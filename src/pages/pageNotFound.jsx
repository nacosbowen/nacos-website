import React from "react";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-9xl font-bold">404</h1>
        <h2 className="text-3xl md:text-4xl font-semibold mt-4">
          Page Not Found
        </h2>
        <p className="text-lg md:text-xl mt-2">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <p className="text-sm md:text-base mt-2">
          Return to the homepage or use the navigation menu to explore.
        </p>
      </div>
      <button
        className="mt-6 px-6 py-3 text-white bg-darkorange text-red-700 font-bold text-lg rounded-md shadow-md hover:bg-[#000] transition duration-300"
        onClick={() => (window.location.href = "/")}
      >
        Go Home
      </button>
      <div className="absolute bottom-4">
        <p className="text-xs text-gray-200">
          NACOS Bowen &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
