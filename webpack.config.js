var path = require('path');
var webpack = require('webpack');
require('babel-polyfill');

var IS_PRODUCTION = process.env.NODE_ENV === 'production';

var ENTRY_POINTS = [
  './src/js/app'
];

var JS_LOADERS = [
  'babel-loader?cacheDirectory&presets[]=react,presets[]=es2015,presets[]=stage-0'
];

var PLUGINS = [];
if (IS_PRODUCTION) {
  // Uglify in production.
  PLUGINS.push(
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: ['$super', '$', 'exports', 'require']
      },
      sourcemap: false
    })
  );
}

module.exports = {
  entry: ENTRY_POINTS,
  output: {
    // Bundle will be served at /bundle.js locally.
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        // JS.
        exclude: /(node_modules|bower_components|vr-markup)/,
        loaders: JS_LOADERS,
        test: /\.js$/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?-svgo'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ],
  },
  plugins: PLUGINS,
  devtool: 'source-map',
  devServer: {
    // proxy calls to api to our own node server backend
    proxy: {
      '/proxy': {
        target: 'https://integration.familysearch.org',
        secure: false,
        logLevel: 'debug',
        changeOrigin: true,
        pathRewrite: {'^/proxy': ''},
        onProxyRes: function onProxyRes(proxyRes, req, res) {
          proxyRes.headers['Access-Control-Allow-Origin'] = '*';     // add new header to response
        }
      }
    }
  }
};
