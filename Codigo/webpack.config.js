module.exports = {
  entry: './src/app/index.js',
  output: {
    path: __dirname + '/src/public/js',
    filename: 'bundle.js'
  },
  
  module:{
    rules:[
        {
            use: 'babel-loader',
            test: /\.js|\.jsx$/,
            exclude:/node_modules/
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            { loader: "css-loader", options: { importLoaders: 1 } },
            "postcss-loader",
          ],
        }
    ]
}

};
