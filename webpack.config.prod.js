/**
 * Webpack config for creating the production bundle.
 * the production bundle.
 */

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  devtool: 'source-map',
  progress: true,

  entry: [
    path.join(__dirname, 'src', 'index.js'),
  ],
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'bundle-[chunkhash].js',
    publicPath: '/',
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css',
          'sass',
        ],
        include: /node_modules/,
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css?modules&importLoaders=2&sourceMap!postcss-loader!sass?outputStyle=expanded&sourceMap'), // eslint-disable-line
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /public/,
        ],
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg|woff|woff2|svg|ttf|eot)$/,
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },

  resolve: {
    extensions: ['', '.js', '.json', '.scss', '.css'],
    modulesDirectories: ['node_modules', 'src'],
  },

  plugins: [
    new CleanWebpackPlugin(['public/dist'], {
      root: path.resolve(__dirname),
      verbose: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),

    // Extract css files
    new ExtractTextPlugin('[name]-[chunkhash].css', { allChunks: true }),

    // optimizations
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],

  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] }),
  ],

};
