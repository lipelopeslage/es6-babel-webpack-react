var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './app/src/app.js',
  output: {
    path: 'app/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",

        /*// Skip any files outside of your project's `src` directory
        include: [
          path.resolve(__dirname, "app/src"),
        ],
        */
        exclude: /node_modules/,

        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,

        // Options to configure babel with
        query: {
          presets: ['es2015','react'],
        }
      }
    ]
  },
  plugins: [
     new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      },comments: false
     })
]
}