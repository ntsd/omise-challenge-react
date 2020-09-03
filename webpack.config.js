const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
  mode: 'none',
  entry: {
    app: path.join(__dirname, 'src', 'index.tsx'),
  },
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            }
          },
        ],
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: path.resolve(__dirname, 'build'),
  },

  devServer: {
    inline: true,
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true,
    disableHostCheck: true,
    contentBase: 'build',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public/images', to: '' },
      ],
    }),
  ],
};

module.exports = config;
