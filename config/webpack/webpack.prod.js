var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

function buildConfig() {
  return {
    context: path.resolve(__dirname, '..', '..'),
    devtool: 'cheap-module-source-map',
    entry: {
      main: path.join(__dirname, '..', '..', 'src', 'BrowserEntry.js'),
      vendor: ['prop-types', 'react', 'react-dom']
    },
    output: {
      path: path.join(__dirname, '..', '..', 'dist'),
      filename: 'assets/js/[name].[chunkhash].js',
      publicPath: '/'
    },
    resolve: {
      modules: ['node_modules', 'src'],
      extensions: ['.js', '.json']
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          screw_ie8: true
        },
        output: {
          comments: false
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: ['vendor', 'manifest']
      }),
      new ExtractTextPlugin({
        filename: 'assets/css/[name].[contenthash:8].css'
      }),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '..', '..', 'src', 'index.html')
      })
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            use: {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: true,
                localIdentName: '[name]__[local]--[hash:base64:5]'
              }
            }
          })
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                name: 'assets/media/[name].[hash:8].[ext]',
                limit: 40000
              }
            }
          ]
        }
      ]
    }
  }
}

module.exports = (function(options) {
  return buildConfig(options)
})()
