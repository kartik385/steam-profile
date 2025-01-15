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
      className=" text-white  py-2 px-4 rounded-md border border-gray-500  shadow-sm hover:bg-gray-600 transition duration-300"
    >
      Logout
    </button>
  );
}

export default Logout;
