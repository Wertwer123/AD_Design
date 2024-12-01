const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',  // Adjust your entry point accordingly
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  target: 'web',  // Ensure Webpack targets a browser environment
  module: {
    rules: [
      {
        test: /\.js$/,
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use:  'ts-loader'
        
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(mp4)$/,
        use: [
          {
            loader: 'file-loader',  // Use file-loader
            options: {
              name: '[name].[ext]',  // Use name and hash for unique filenames
              outputPath: 'assets/',  // Store in 'videos' directory in the output
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        
        use: [
          {
            loader: 'file-loader',  // Use file-loader
            options: {
              name: '[name].[ext]',  // Use name and hash for unique filenames
              outputPath: 'assets/',  // Store in 'videos' directory in the output
            }
          }
        ]

      },
      {
        test: /\.(woff|woff2|ttf|otf)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',  // Use name and hash for unique filenames
            outputPath: 'assets/',
          }
        },
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']},

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'  // Your HTML template
    })
  ],
  devServer: {
    static: './dist',
    hot: true
  }
};