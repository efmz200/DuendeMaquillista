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
            test: /\.js$/,
            exclude:/node_modules/
        },
        {
          test: /\.(sass|less|css)$/,
          use: ["style-loader", "css-loader", 'sass-loader'],
        }
    ]
}

};
