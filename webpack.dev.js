const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');


module.export = {
    mode: 'development',
    devtool: 'inline-source-map',
    devSever: {
        static: './dist',
    },
};

