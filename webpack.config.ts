const path = require('path');
const nodeExternals = require('webpack-node-externals');

console.log(path.resolve(__dirname, 'src/api'));

/**
 *
 */
module.exports = {
  entry: './src/index.ts',
  target: 'node',
  mode: 'development',
  externals: [nodeExternals()],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@api': path.resolve(__dirname, 'src/api'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
      },
    ],
  },
};
