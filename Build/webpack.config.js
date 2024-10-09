const path = require('path');

module.exports = {
  mode: 'development', // use 'production' for production mode
  entry: {
    bootstrapMain: './JS/Bootstrap/main.js', // bundle 1
    test: './JS/Custom/test.js',             // bundle 2
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../Resources/Public/JS'), 
  },
  resolve:{
    alias:{
      // This allows you to use import bootstrap from ‘bootstrap’
      // in your JavaScript files without having to specify the full path.
      bootstrap: path.resolve(__dirname, 'node_modules/bootstrap')      
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                quietDeps: true,
              },
            },
          },
        ],
      },
    ]
  }
}