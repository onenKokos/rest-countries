const path = require('path');

module.exports = {
  ENTRIES: [path.resolve(__dirname, './resources/js/index.jsx')],
  OUTPUT_PATH: path.resolve(__dirname, './public/compiled'),
  PUBLIC_PATH: '/compiled',
  CONTENT_BASE: [
    path.resolve(__dirname, './public/compiled'),
    path.resolve(__dirname, './resources/views/templates'),
    path.resolve(__dirname, './resources/views/compiled'),
  ],
  INDEX_FILE: path.resolve(__dirname, './resources/views/compiled/index.html'),
  HTML_INPUT: path.resolve(__dirname, './resources/views/templates/index.html'),
  HTML_OUTPUT: path.resolve(__dirname, './resources/views/compiled/index.html'),
};
