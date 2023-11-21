/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname:"pbs.twimg.com",
                hostname:"localhost"
            },
        ],
    },}

module.exports = nextConfig
