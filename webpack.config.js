const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const config = {
    entry: path.join(__dirname, 'src/main.js'),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(gif|jpg|jpeg|svg)/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: '[name].[hash:6].[ext]'
                }
            }]
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin()
    ]
};
// console.log(process.env);
// if (process.env.NODE_ENV === 'development') {
    config.devtool = '#cheap-module-eval-source-map';
    config.devServer = {
        port: '8000',
        host: '0.0.0.0',
        overlay: {
            errors: true
        },
        contentBase: path.join(__dirname, 'dist'),
        open: true,
        hot: true,
    }
    config.plugins.push(
    	new webpack.HotModuleReplacementPlugin(),
    	// new webpack.NoEmitOnErrorsPlugin()
    )
// }

module.exports = config;