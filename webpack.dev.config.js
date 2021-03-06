var webpack = require("webpack");
var path = require("path");

var OUT_DIR = path.join(__dirname,"public");

module.exports = {
  entry:{
    ide: ['./src/milo.js',"webpack-hot-middleware/client?reload=true"]
  },
  output: {
    path: OUT_DIR,
    publicPath: __dirname + "/public",
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
   rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      'Blockly':'milo-blocks'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devtool: 'source-map'
};
