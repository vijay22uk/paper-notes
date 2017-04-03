const path = require('path');



const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|server|public)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};

module.exports = config;