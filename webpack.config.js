const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [{
            test: /\.(js)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {targets: "defaults"}]
                ],
                "plugins": [
                    "@babel/plugin-proposal-class-properties",
                    "@babel/plugin-proposal-private-methods",
                    "@babel/plugin-syntax-dynamic-import"
                ]
            }
        }]
    },
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
        },
    },
};
