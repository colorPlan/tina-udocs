/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
        permanent: true
      }
    ]
  }
};
