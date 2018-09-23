const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin  = require("mini-css-extract-plugin");

module.exports = {
    entry:{
        vendor: [
            "react",
            "react-dom",
            "redux"
        ],
        main: [
            "@babel/polyfill",
            "./src/index.js"
        ],
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "[name].[hash].js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: [require("@babel/plugin-proposal-object-rest-spread")]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                  },
                  "css-loader"
                ]
              }
        ]
    },
    optimization: {
        splitChunks: {
          cacheGroups: {
            vendor: {
              chunks: "initial",
              name: "vendor",
              test: "vendor",
              enforce: true
            },
          }
        },
        runtimeChunk: true
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
        }) 
    ]
};