module.exports = {
  context: __dirname,
  entry: './src/main.ts',
  output: {
    path: './public/javascripts',
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}
