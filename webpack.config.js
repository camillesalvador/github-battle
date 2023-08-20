const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /\.js|jsx$/,
            exclude: /node_modules/,
            use: 'babel-loader',
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }]
    },
    resolve: {
        extensions: ['.jsx', "..."],
    },
    plugins: [
        new HtmlWebpackPlugin({template: "app/index.html"}),
    ],
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    devServer: {
        historyApiFallback: true,
    }
}