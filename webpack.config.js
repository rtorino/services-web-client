'use strict';

var path = require('path');
var webpack = require('webpack');

var appRoot = path.join(__dirname, '/src');
var bowerRoot = path.join(__dirname, '/bower_components');
var styleRoot = appRoot + '/assets/styles';

module.exports = {
  cache: true,
  debug: true,
  entry: [appRoot + '/app.js'],
  output: {
    path: './build',
    filename: 'bundle.js',
    chunkFilename: "[id].bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', "sass?includePaths[]=" + styleRoot]
      },
       // **IMPORTANT** This is needed so that each bootstrap js file required by
      // bootstrap-webpack has access to the jQuery object
      {
        test: /bootstrap\/js\//,
        loader: 'imports?jQuery=jquery'
      },

      // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
      // loads bootstrap's css.
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=application/font-woff2'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=image/svg+xml'
      }
    ],
    noParse: [
      path.join(bowerRoot, '/angular'),
      path.join(bowerRoot, '/angular-route'),
      path.join(bowerRoot, '/angular-ui-router'),
      path.join(bowerRoot, '/angular-mocks'),
      path.join(bowerRoot, '/angular-file-upload-binaryjs' )
    ]
  },
  resolve: {
    modulesDirectories: [
      'node_modules',
      'bower_components'
    ],
    alias: {
      bower: bowerRoot
    },
    extensions: ['', '.js', '.scss', '.css'],
    root: appRoot
  },
  amd: { jQuery: true },
  plugins: [
    new webpack.ResolverPlugin([
      new webpack.ResolverPlugin
        .DirectoryDescriptionFilePlugin('bower.json', ['main'])
    ], ['normal', 'loader']),
    new webpack.ContextReplacementPlugin(/.*$/, /a^/),
    new webpack.ProvidePlugin({
      'angular': 'exports?window.angular!bower/angular'
    })
  ],
  devtool: '#source-map'
};
