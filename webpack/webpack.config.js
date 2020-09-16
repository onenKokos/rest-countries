const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = (mode, options) => ({
  mode,
  entry: options.ENTRIES,
  output: {
    filename: mode === 'development' ? '[name].js' : '[contenthash].js',
    path: options.OUTPUT_PATH,
    publicPath: options.PUBLIC_PATH,
  },
  devServer: {
    compress: true,
    host: '0.0.0.0',
    hot: true,
    port: 8080,
    inline: true,
    open: true,
    overlay: true,
    useLocalIp: true,
    writeToDisk: true,
    filename: '[name].js',
    historyApiFallback: true,
    contentBase: options.CONTENT_BASE,
    index: options.INDEX_FILE,
  },
  watchOptions: {
    ignored: /(node_modules)/,
  },
  devtool: 'source-map',
  target: 'web',
  plugins: [
    new MiniCssExtractPlugin({
      filename: mode === 'development' ? '[name].css' : '[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      filename: options.HTML_INPUT,
      template: options.HTML_OUTPUT,
    }),
    new StylelintPlugin({
      files: ['**/*.{htm, html,php,css,scss,sass,jsx}'],
      fix: true,
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../resources/js/'),
      '@Atoms': path.resolve(__dirname, '../resources/js/atoms'),
      '@Assets': path.resolve(__dirname, '../resources/assets'),
      '@Contexts': path.resolve(__dirname, '../resources/js/contexts'),
      '@Hooks': path.resolve(__dirname, '../resources/js/hooks'),
      '@Molecules': path.resolve(__dirname, '../resources/js/molecules'),
      '@Routes': path.resolve(__dirname, '../resources/js/routes'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {
            loader:
              mode === 'development'
                ? 'style-loader'
                : MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: require('sass'),
              sassOptions: {
                fiber: require('fibers'),
                includePaths: [path.resolve(__dirname, '../node_modules/')],
              },
            },
          },
        ],
      },
      {
        enforce: 'pre',
        test: /\.(js|mjs|jsx)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
            },
          },
        ],
      },
      {
        test: /\.(js|mjs|jsx)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name:
                mode === 'development'
                  ? '[folder]/[name].[ext]'
                  : '[contenthash].[ext]',
              outputPath: 'images',
              esModule: false,
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              disable: mode === 'development',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name:
                mode === 'development'
                  ? '[folder]/[name].[ext]'
                  : '[contenthash].[ext]',
              outputPath: 'fonts',
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.txt$/,
        use: [
          {
            loader: 'raw-loader',
            options: {
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.json$/,
        use: [
          {
            loader: 'json-loader',
          },
        ],
      },
      {
        test: /\.(htm|html|php)$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
});
