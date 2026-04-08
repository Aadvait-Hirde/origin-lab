import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/apply",
        destination: "https://airtable.com/applefttOQAtaZ7wa/paggfdS3QhArLUQxt/form",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
