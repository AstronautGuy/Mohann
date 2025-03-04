/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    trailingSlash: true,
    images: {
        unoptimized: true, // Disable image optimization for static exports
    },
};
export default nextConfig;