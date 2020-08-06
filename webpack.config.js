const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: `bundle.min.js?${new Date().getTime()}`,
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'ts-loader',
                    'stylelint-custom-processor-loader',
                ],
            },
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        },
        modules: ['node_modules'],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
        new CopyWebpackPlugin([
            {
                from: './public/',
                to: './',
            },
        ]),
    ],
    devServer: {
        port: 3000,
        historyApiFallback: true,
    },
};
