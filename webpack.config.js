const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { node } = require("webpack");

module.exports = {
  mode: "development", //←はソースマップが有効。デプロイ時はproductionに変更
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader", //昔のブラウザでも対応させる
          },
          // {
          //   loader: "ts-loader" //typescriptからjsにコンパイル
          // },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", "ts", "tsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
  },
};
