const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const paths = require('./paths');
const config = require('./config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require("open-browser-webpack-plugin");
const devConfig = {
    devtool: 'cheap-module-source-map',
    // 指定为开发模式
    mode: 'development',

    entry: {
        main: [
            `webpack-dev-server/client?http://localhost:${config.port}`,
            require.resolve('webpack/hot/dev-server'),
            paths.appJs,
        ]
    },
    output: {
        publicPath: '',
    },
    plugins: [
        new webpack.NamedChunksPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: 'static/css/[name].css',
            allChunks: true
        }),
        new OpenBrowserPlugin({
            url: `http://localhost:${config.port}`
        })
    ]
}

module.exports = merge(baseConfig, devConfig);