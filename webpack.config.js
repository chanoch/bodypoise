const path = require('path');
var { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');

var noVisualization = process.env.NODE_ENV === 'production' 
        || process.argv.slice(-1)[0] == '-p'
|| process.argv.some(arg => arg.indexOf('webpack-dev-server') >= 0);

module.exports = {
    watch: true,
    entry: {
        vendor: ['react', 'react-dom', 'axios'],
        index: './src/react/index.jsx',
    },
    output: {
        path: path.join(__dirname, 'dist/public'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        rules: [
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
            { test: /\.js.?$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.json$/, loader: 'json-loader' }
        ],
    },
    plugins: [
        // new BundleAnalyzerPlugin({
        //     analyzerMode: 'static'
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        }),
        new CopyWebpackPlugin([{
            from: 'src/public',
            to:   '../public'
        },{
            from: 'src/server',
            to:   '../server'
        }])
    ]
}