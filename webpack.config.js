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
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  plugins: [
    new WebpackNotifierPlugin(),
    new webpack.ProvidePlugin({    // <added>
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'   // </added>
    }),
    new webpack.optimize.UglifyJsPlugin({ minimize: true })  // minify
  ]
}
