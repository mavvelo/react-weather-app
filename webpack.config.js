const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Handle .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(scss|css)$/, // Handle SCSS and CSS
        use: [
          'style-loader',  // Injects CSS into the DOM
          'css-loader',    // Turns CSS into CommonJS
          'sass-loader',   // Compiles Sass to CSS
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/, // Handle font files
        type: 'asset/resource', // Webpack 5 asset handling
        generator: {
          filename: 'fonts/[name][ext][query]', // Output fonts to fonts/ directory
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Allow imports without extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Reference the template file for index.html
    }),
    // Add DefinePlugin to inject environment variables
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env), // Injects process.env into the app
    }),
  ],
};
