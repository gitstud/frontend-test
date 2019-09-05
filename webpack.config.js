const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
        app: './index.js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                }
            }
        },
        // minimize js and css
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    ecma: 6,
                }
            }),
            new OptimizeCss({
                cssProcessorOptions: {
                    discardComments: true,
                }
            })
        ]
    },
    // hot reload source code
    devServer: {
        hot: true,
        compress: true,
        contentBase: path.join(__dirname, 'dist'),
        open: 'Chrome'
    },
    watch: true,
    devtool: 'source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/js')
    },
    // clean the dist folder on each build
    // Prevent duplicate css chunks
    // hot reload
    // template our html file
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '../css/style.css',
            chunkFilename: '[name].css'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    // transform scss and js (babel config is in package.json)
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.scss']
    }
}