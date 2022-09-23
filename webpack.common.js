const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.export = {
    entry: {
        app: './src/index.js', 
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Production',
        }),
    ],
    output: {
        filename: 'prod.bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};