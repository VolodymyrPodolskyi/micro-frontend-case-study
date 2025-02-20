// next.config.js
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        remotes: {
          // These remote names must match the exposed names in your remote apps.
          productsRemote: `productsRemote@${process.env.NEXT_PUBLIC_REMOTE_PRODUCTS_URL}/_next/static/chunks/remoteEntry.js`,
          basketRemote: `basketRemote@${process.env.NEXT_PUBLIC_REMOTE_BASKET_URL}/_next/static/chunks/remoteEntry.js`
        },
        shared: {
          react: { singleton: true, eager: true },
          'react-dom': { singleton: true, eager: true }
        }
      })
    );
    return config;
  }
};
