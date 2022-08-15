/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: "raw-loader"
      }
    );
    return config
  },
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  }
}

module.exports = nextConfig
