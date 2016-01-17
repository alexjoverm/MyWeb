var path = require('path');


module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'www/client/js/app.js')
        ],
    output: {
        path: path.resolve(__dirname, 'www/client'),
        publicPath: 'www/client',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /src\/.+.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    }
};