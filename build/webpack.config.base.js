
const path = require('path')
const isDev = process.env.NODE_ENV === 'development'
const config = {
  mode: isDev ? 'development' : 'production',
  entry: {
    index: path.join(__dirname, '../src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.[hash:8].js', // dev环境使用chunkHash会报错
    chunkFilename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.vue', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      // {
      //   test: /\.(vue|js|jsx)$/,
      //   loader: 'eslint-loader',
      //   exclude: /node_modules/,
      //   enforce: 'pre'
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: '[path][name].[ext]'
        }
      }
    ]
  },
}

module.exports = config
