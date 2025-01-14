import React from "react";

function loading() {
  return (
    // create a skeleton loader
    <div className="animate-pulse flex flex-col gap-5">
      <div className="h-4 bg-gray-200 rounded"></div>
      <div className="h-4 bg-gray-200 rounded"></div>
      <div className="h-4 bg-gray-200 rounded"></div>
      <div className="h-4 bg-gray-200 rounded"></div>
      <div className="h-4 bg-gray-200 rounded"></div>
    </div>
  );
}

export default loading;
