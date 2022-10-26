const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry:
    {
        bundle: path.resolve(__dirname, './src/js/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devtool:  'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
            port: 3500,
            open: true,
            hot: true,
            compress: true,
            historyApiFallback: true
        
    },
    module: {
        rules: [{
            test: /\.scss|.css$/,
            use: ['style-loader','css-loader','sass-loader']

        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource'
        }
        
    ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My Website',
            filename: 'index.html',
            template: './src/html/index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/html/aboutme.html',
            filename: 'aboutme.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/html/thingsiread.html',
            filename: 'thingsiread.html',
        })
     
    ]
};
