// next.config.js
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'productsRemote',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          // Expose the ProductList component for the host application
          './ProductList': './components/ProductList'
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
