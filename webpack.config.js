const path = require('path');

module.exports = {
    entry: './client/src/index.jsx',
    output: {
        filename: 'bigBundle.js',
        path: path.resolve(__dirname, 'client/public'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$|\.m?jsx$/,
                exclude: /(node_modules)|(bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
}