/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // output: 'export',
    // distDir: './dist', // Changes the build output directory to `./dist/`.
    images: {
        domains: ['localhost'],
    },
};

export default nextConfig;
