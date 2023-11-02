/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdnb.artstation.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
