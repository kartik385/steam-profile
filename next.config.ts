import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.steampowered.com/:path*",
      },
    ];
  },
};

export default nextConfig;
