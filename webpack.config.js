const webpack = require('webpack');
const path = require('path');

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: './app.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'dist/bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['es2015', { modules: false }]
                    ]
                }
            }]
        },{
            test: /\.(sass|scss)$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },{
            test: /\.(png|jpg|jpeg)$/,
            use: [{
                loader: 'url-loader',
                options: { limit: 10000 }
            }]
        }]
    },
    plugins: [
        new webpack.NamedModulesPlugin()
    ]
}

module.exports = config;