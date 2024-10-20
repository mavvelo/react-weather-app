const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve from the dist directory
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(scss|css)$/, // Combine SCSS and CSS handling
        use: [
          'style-loader',  // Injects styles into the DOM
          'css-loader',    // Turns CSS into CommonJS
          'sass-loader',   // Compiles Sass to CSS (for .scss files)
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/, // Match font files
        type: 'asset/resource', // Recommended way to handle fonts in Webpack 5
        generator: {
          filename: 'fonts/[name][ext][query]', // Output directory for fonts
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
