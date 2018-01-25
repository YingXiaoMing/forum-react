var webpack = require('webpack');
var plugin = [];
var path = __dirname + '/dist/';
var publicPath = '/dist/';  //服务器路径
module.exports = {
    entry: {
        app: './src/App',
    },
    output: {
        publicPath,
        path,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /^node_modules$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015'],
                            compact: 'false',
                            plugins: ['syntax-dynamic-import']
                        }
                    }
                ]
            },
            {
                test: /\.jsx$/,
                exclude: /^node_module$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                "es2015",
                                "react"
                            ],
                            plugins: ['syntax-dynamic-import']
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js','.jsx']
    }
}