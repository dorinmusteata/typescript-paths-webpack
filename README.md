# typescript-paths-webpack

Compile your typescript with webpack or tsc with relative paths

# tsconfig.json

```
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "ES2019",
    "noImplicitAny": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "sourceMap": true,
    "outDir": "dist",
    "baseUrl": "src",
    "removeComments": true,
    "rootDir": ".",
    "paths": {
      "*": ["node_modules/*"],
      "@/*": ["./*"],
      "@api/*": ["api/*"]
    },
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  },
  "exclude": ["node_modules"],
  "include": ["src/**/*"]
}
```

# webpack.config.ts

This is config for webpack builder

```
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
```
