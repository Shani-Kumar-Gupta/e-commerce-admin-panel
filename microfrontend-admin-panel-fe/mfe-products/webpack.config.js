const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    publicPath: 'http://localhost:4202/',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: 4202,
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    static: { directory: path.join(__dirname, 'public') },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|jpg|jpeg|gif|svg)$/i, type: 'asset/resource' },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mfeProducts',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsApp': './src/bootstrap',
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: false },
        'react-dom': { singleton: true, eager: true, requiredVersion: false },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};