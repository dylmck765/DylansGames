/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  // GitHub Pages serves from /<repo-name>/ — set basePath to match.
  // Change "DylansGames" to your exact repo name if different.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: { unoptimized: true },
};

export default nextConfig;
