/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fakestoreapi.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
        pathname: "/img/**",
      },
    ],
  },
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        remotes: {
          products: `products@${process.env.PRODUCTS_REMOTE_URL}`,
          basket: `basket@${process.env.BASKET_REMOTE_URL}`
        },
        shared: {
          'react': { singleton: true },
          'react-dom': { singleton: true }
        }
      })
    );
    return config;
  }
};

module.exports = nextConfig;
