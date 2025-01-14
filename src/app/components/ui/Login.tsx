"use client";

import React, { useActionState } from "react";
import { BackgroundBeams } from "./background-beams";
import useSWR from "swr";
import { qrFetcher, qrPoller } from "@/app/lib/apis";
import SkeletonLoader from "./skeletonLoader";
import QRCode from "react-qr-code";
import { loginUser } from "@/app/lib/actions";

function Login() {
  const { data: QrData, isLoading } = useSWR(
    "IAuthenticationService/BeginAuthSessionViaQR/v1/",
    qrFetcher
  );

  if (QrData?.response) {
    qrPoller(QrData.response.request_id, +QrData.response.client_id);
  }

  const [data, action, pending] = useActionState(loginUser, undefined);

  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="relative z-10 text-3xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Login
        </h1>

        <div className="flex justify-between items-center mt-5 gap-20 md:divide-x md:divide-gray-600  ">
          <div>
            <form action={action}>
              <input
                type="text"
                placeholder="Enter You Steam ID"
                id="steam-id"
                name="steam-id"
                autoFocus
                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
              />
              <button
                type="submit"
                disabled={pending}
                className="bg-teal-500 text-neutral-950 w-full rounded-lg p-2 mt-4 relative z-10"
              >
                Login
              </button>

              {data?.error && (
                <p className="text-red-500 text-sm mt-2">{data.error}</p>
              )}
            </form>
          </div>

          <div className="hidden md:block pl-20">
            <div>
              {isLoading ? (
                <SkeletonLoader />
              ) : (
                <QRCode
                  value={QrData?.response.challenge_url || ""}
                  size={150}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default Login;
