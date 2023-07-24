/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  ...nextConfig,
  env: {
    API_ENDPOINT: 'https://rosyad-express.vercel.app/api/graphql'
  }
}
