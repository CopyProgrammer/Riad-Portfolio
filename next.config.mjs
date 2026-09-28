/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/home-v2',
        destination: '/',
        permanent: false,
      },
      {
        source: '/home-v3',
        destination: '/',
        permanent: false,
      },
      {
        source: '/home-v4',
        destination: '/',
        permanent: false,
      },
      {
        source: '/blog/:path*',
        destination: '/',
        permanent: false,
      },
      {
        source: '/blog',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
