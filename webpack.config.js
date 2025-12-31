const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
      test: /\.js$/i,
      exclude: /node_modules/,
      type: 'javascript/auto',
    },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    proxy: [
      {
        context: ['/api'],
        target: 'https://api.pokemontcg.io',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    ],
    static: ['./dist','./public'],
    hot: true,
    watchFiles: ['src/**/*'],
    open: true,
  },
};
