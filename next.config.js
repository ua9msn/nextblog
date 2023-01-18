/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (cfg) => {
    cfg.module.rules.push(
        {
            test: /\.md$/,
            use: 'raw-loader',
        }
    )
    return cfg;
  }
}

module.exports = nextConfig
