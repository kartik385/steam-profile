import Link from "next/link";
import { Icon } from "./components/ui/Icon";
import { Spotlight } from "./components/ui/Spotlight";

export default async function Home() {
  return (
    <div className="h-screen w-full rounded-md flex items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 max-w-4xl   mx-auto relative z-10  w-full  ">
        <div className="border border-white/[0.2] flex flex-col items-start  mx-auto p-4 relative md:py-20 ">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

          <h1 className="text-4xl w-full md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            SteamScope
          </h1>
          <p className="mt-7 font-normal text-base md:text-xl text-neutral-300 max-w-lg text-center mx-auto">
            Your complete Steam profile analyzer. Dive deep into your gaming
            journey with detailed statistics and insights.
          </p>
          <div className="mt-10 flex justify-center w-full">
            <Link
              href={`/SignIn`}
              className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block"
            >
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1 px-10 ring-1 ring-white/10 text-base font-bold ">
                Login with Steam
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
