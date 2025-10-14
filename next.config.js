/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    async redirects() {
        return [
            {
                source: '/',
                destination: '/en',
                permanent: false,
            },
        ]
    },
}

module.exports = nextConfig
