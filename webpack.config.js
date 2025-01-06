const path = require('path');

   module.exports = {
       entry: './src/index.js',
       output: {
           filename: 'bundle.js',
           path: path.resolve(__dirname, 'dist'),
           publicPath: '/'
       },
       module: {
           rules: [
               {
                   test: /\.js$/,
                   exclude: /node_modules/,
                   use: {
                       loader: 'babel-loader'
                   }
               },
               {
                   test: /\.css$/,
                   use: ['style-loader', 'css-loader']
               },
               {
                   test: /\.(png|jpg|gif)$/,
                   use: [
                       {
                           loader: 'file-loader',
                           options: {
                               name: '[path][name].[ext]',
                           },
                       },
                   ],
               },
           ],
       },
       devServer: {
           contentBase: './dist',
           open: true,
       },
       mode: 'development'
   };