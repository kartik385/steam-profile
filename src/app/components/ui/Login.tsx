"use client";

import React, { useActionState } from "react";
import { BackgroundGradient } from "./background-beams";

import { loginUser } from "@/app/lib/actions";
import { BackgroundBeams } from "./beam2";

function Login() {
  const [data, action, pending] = useActionState(loginUser, undefined);

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br ">
      <BackgroundGradient
        animate={false}
        className="max-w-md p-8 rounded-lg shadow-lg backdrop-blur-md "
      >
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Steam Login
        </h1>
        <form action={action} className="space-y-5 mt-4">
          <div>
            <input
              type="text"
              placeholder="Enter You Steam ID"
              id="steam-id"
              name="steam-id"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white focus:outline-none focus:border-blue-900 focus:border-2"
            />
          </div>
          {data?.error && (
            <div className="text-red-500 text-sm text-center">{data.error}</div>
          )}
          <button
            type="submit"
            disabled={pending}
            className="w-full border-4 font-semibold border-blue-500 px-4 py-2 rounded-lg bg-transparent text-white hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Login
          </button>
        </form>
      </BackgroundGradient>
      <BackgroundBeams />
    </div>
  );
}

export default Login;
