process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const options = require('../webpack.input.js');

module.exports = merge(common('production', options), {
  mode: 'production',
});
