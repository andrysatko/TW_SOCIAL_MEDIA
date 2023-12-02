/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
    images: {
        remotePatterns: [
            {
                hostname:"pbs.twimg.com",
                hostname:"localhost"
            },
        ],
    },}

module.exports = nextConfig
