var webpack = require('webpack');
var path = require('path');
var PROD = JSON.parse(process.env.PROD_ENV || '0');

var BUILD_DIR = path.resolve(__dirname, 'dist/');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
  entry: ['whatwg-fetch', APP_DIR + '/index.jsx'],
  devtool: 'source-map',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  plugins: PROD ? [
    new webpack.optimize.UglifyJsPlugin({
      // Don't beautify output (enable for neater output)
      beautify: false,
      // Eliminate comments
      comments: false,

      // Compression specific options
      compress: {
        warnings: false,
        // Drop `console` statements
        drop_console: true
      },

      // Mangling specific options
      mangle: {
        // Don't care about IE8
        screw_ie8: true,

        // Don't mangle function names
        keep_fnames: true
      }
    })
  ] : [],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loader: "react-hot!babel-loader"
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /fonts\/.*\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=src/assets/fonts/[name].[ext]'
      },
      {
        test: /images\/.*\.(jpe?g|png|svg)$/,
        loader: 'file-loader?name=src/assets/images/[name].[ext]'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8089',
        path: `/api/*`,
        changeOrigin: true,
        secure: false
      }
    }
  }
};

module.exports = config;
