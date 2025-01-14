"use client";

import { logoutUser } from "@/app/lib/actions";
import React from "react";

function Logout() {
  const logOut = () => {
    logoutUser();
  };
  return (
    <button
      onClick={logOut}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Logout
    </button>
  );
}

export default Logout;
