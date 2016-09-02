var webpack = require("webpack");
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');
module.exports = {
  entry: {
    app: ['./src/app.ts']
  },
  output: {
    filename: './app.dist.js'
  },
  resolve: {
    root: [path.join(__dirname, 'node_modules'), path.join(__dirname, 'bower_components')],
    extensions: ['', '.ts', '.webpack.js', '.web.js', '.js']
  },
  moduleDirectories: [
    'bower_components',
    'node_modules',
  ],
  watch: true,
  devtool: (process.env.ENV === 'release') ? 'eval' : 'inline-source-map',
  module: {
    loaders: [
      { test: /\.ts$/, loaders: ['ng-annotate', 'ts-loader'] },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.svg$/, loader: 'url-loader?mimetype=image/svg+xml' },
      { test: /\.woff$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.woff2$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.eot$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'url-loader?mimetype=application/font-woff' }
    ]
  },
  plugins: [
    new WebpackNotifierPlugin(),
    new webpack.ProvidePlugin({ jQuery: 'jquery', $: 'jquery', jquery: 'jquery' }),
    new webpack.optimize.UglifyJsPlugin({ minimize: true })  // minify
  ]
}
