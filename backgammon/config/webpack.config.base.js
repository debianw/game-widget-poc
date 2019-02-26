//
const path = require('path')

//
module.exports = {
  mode: 'production',
  entry: './backgammon/client/index.js',
  output: {
    path: path.resolve(__dirname, '../server/dist'),
    filename: 'backgammon.js',
    libraryTarget: 'umd',
    libraryExport: 'default',
    globalObject: 'this',
    library: 'backgammon'
  },
  externals: {
    // Don't bundle react or react-dom      
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      // SVG Font
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'image/svg+xml'
          }
        }
      },
      // Common Image Formats
      {
        test: /\.(?:ico|gif|png|webp)$/,
        use: 'url-loader'
      },
      {
        test: /\.(?:jpg|jpeg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: './img/[sha512:hash:base64:5]-[name].[ext]'
          }
        }
      }
    ]
  }
}
