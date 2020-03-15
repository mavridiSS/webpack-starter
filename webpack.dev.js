const common = require("./webpack.common.js");
const merge = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  output: {
    chunkFilename: "[id].chunk.js"
  },
  devServer: {
    inline: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader?sourceMap=true"]
      }
    ]
  }
});
