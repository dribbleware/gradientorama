var path = require('path'),
    webpack = require('webpack'),
    config = require('./webpack.config.base');

var plugins = [
  new webpack.optimize.OccurenceOrderPlugin(true),
  new webpack.optimize.DedupePlugin(),
  new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': JSON.stringify('production')
      }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  })
]

config.output.path = path.join(__dirname, 'dist');
config.plugins = plugins;

module.exports = config;
