process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const options = require('../webpack.input.js');

module.exports = merge(common('development', options), {
  mode: 'development',
});
