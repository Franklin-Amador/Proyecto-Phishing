/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        URL_TURSO: process.env.URL_TURSO,
        TOKEN: process.env.TOKEN,
    },
};

export default nextConfig;
