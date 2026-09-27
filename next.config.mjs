/** @type {import('next').NextConfig} */
const nextConfig = {
  // Browsers and some crawlers request /favicon.ico directly; serve the generated icon.
  async rewrites() {
    return [{ source: "/favicon.ico", destination: "/icon" }];
  },
};

export default nextConfig;
