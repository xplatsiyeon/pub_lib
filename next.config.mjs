/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), "src/theme")],
  },
  webpack: (config) => {
    config.cache = false;
    return config;
  },
};

export default nextConfig;
