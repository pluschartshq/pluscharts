import path from 'path';

export default {
  devtool: 'source-map',
  mode: 'development',
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "pluscharts.js",
    libraryTarget: 'var',
    library: ["pluscharts", "draw"],
    libraryExport: "default"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};