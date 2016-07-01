var path = require('path');

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
      },
    ]
  }
}