/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DATABASE_URL: process.env.URL_TURSO,
        DATABASE_AUTH_TOKEN: process.env.TOKEN,
    },
};

export default nextConfig;
