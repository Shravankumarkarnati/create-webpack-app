const path = require("path");

module.exports = ({ mode = "production", presets }) => {
  console.log(presets.split(","));

  return {
    entry: "./src/index.js",
    output: "dist",
    mode,
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.m?ts$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "ts-loader",
          },
        },
      ],
    },
    devServer: {
      port: "3000",
    },
  };
};
