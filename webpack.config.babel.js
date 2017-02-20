/**
 * Created by tanDong on 2017/2/17.
 */
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import OpenBrowser from "open-browser-webpack-plugin";
export default {
    entry: "./src/index.js",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "bundle")
    },
    module: {
        rules: [
            {test: /\.js?$/, use: "babel-loader", exclude:path.resolve(__dirname,"node_modules")}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "reduxFormTest"
        }),
        new OpenBrowser({
            url: "http://localhost:8080"
        })
    ]
}