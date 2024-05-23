// next.config.mjs
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: false, // Set to true if the redirect is permanent
      },
    ];
  },
};

export default nextConfig;
