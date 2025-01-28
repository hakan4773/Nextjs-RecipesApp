/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.dummyjson.com', // '/' işareti kaldırıldı
            port: '',
            pathname: '/recipe-images/**', // Google'da bu patika kontrol edilmeli
          },
        ],
      },
};

export default nextConfig;
