const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/app.ts',
    target: 'node',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    externals: [nodeExternals()],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
};
