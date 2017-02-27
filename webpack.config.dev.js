var base = require('./webpack.config.base');

base.output.publicPath = "/static/";

module.exports = base;
