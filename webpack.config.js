const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
	entry: {
		index: './src/js/index.js',
		about: './src/js/about/index.js',
        statistic: './src/js/analytics/index.js'
	},

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].[chunkhash].js'
    },
    module: {
        rules: [{ // тут описываются правила
            test: /\.js$/, // регулярное выражение, которое ищет все js файлы
            exclude: /node_modules/, // исключает папку node_modules
            use: {loader: "babel-loader"} // весь JS обрабатывается пакетом babel-loader
        },
            {
                test: /\.css$/,
                use: [ isDev ? 'style-loader' : { loader: MiniCssExtractPlugin.loader, options: { publicPath: '../'} }, 'css-loader', 'postcss-loader', ]
            },
            {
                test: /\.(png|jpg|gif|ico|svg|jpeg)$/,
                use: [
                    'file-loader?name=./images/[name].[ext]', // указали папку, куда складывать изображения
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOneDebug: true,
                            disable: false,
                        }
                    },
                ]
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?name=./vendor/[name].[ext]'
            }

        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/[name].[contenthash].css'
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default'],
            },
            canPrint: true
        }),
        new WebpackMd5Hash(),
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new HtmlWebpackPlugin({
            inject: false, // стили НЕ нужно прописывать внутри тегов
            template: 'src/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            inject: false, // стили НЕ нужно прописывать внутри тегов
            template: 'src/about.html',
            filename: 'about.html'
        }),
        new HtmlWebpackPlugin({
            inject: false, // стили НЕ нужно прописывать внутри тегов
            template: 'src/statistic.html',
            filename: 'statistic.html'
        }),
    ]
}
