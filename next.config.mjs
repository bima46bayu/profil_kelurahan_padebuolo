/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://vjzmjkhkdjvfwzvdkcok.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
    domains: ['vjzmjkhkdjvfwzvdkcok.supabase.co'],
  },
};

export default nextConfig;


