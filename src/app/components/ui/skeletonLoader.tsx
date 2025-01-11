"use client";

import React from "react";

function SkeletonLoader() {
  return (
    <div className="animate-pulse flex flex-col gap-5">
      <div className="h-4 bg-gray-200 rounded"></div>
      <div className="h-4 bg-gray-200 rounded"></div>
      <div className="h-4 bg-gray-200 rounded"></div>
      <div className="h-4 bg-gray-200 rounded"></div>
      <div className="h-4 bg-gray-200 rounded"></div>
    </div>
  );
}

export default SkeletonLoader;
