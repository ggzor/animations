const path = require('path');
const glob = require('glob');

var BitBarWebpackProgressPlugin = require('bitbar-webpack-progress-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: toObject(glob.sync("./src/*.ts")),
    module: {
        rules: [{
            use: 'ts-loader',
            test: /\.tsx?/
        }]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new BitBarWebpackProgressPlugin()
    ]
};

function toObject(paths) {
    var ret = {};

    paths.forEach(function (path) {
        ret[path.split('/').slice(-1)[0].split('.')[0]] = path;
    });

    return ret;
}