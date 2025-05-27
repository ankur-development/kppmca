/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Disable strict mode to avoid findDOMNode issues
  images: {
    domains: [
      "yourteambucket.s3.ap-south-1.amazonaws.com", // Add your S3 bucket hostname
    ],
  },
};

export default nextConfig;