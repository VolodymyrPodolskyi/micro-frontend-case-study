new ModuleFederationPlugin({
  name: 'products',
  filename: 'remoteEntry.js',
  exposes: {
    './ProductGrid': './src/components/ProductGrid.tsx'
  }
}); 