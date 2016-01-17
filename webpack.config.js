var path = require('path');


module.exports = {
    entry: path.resolve(__dirname, 'www/client/js/app.js'),
    output: {
        path: path.resolve(__dirname, 'www/client/build/'),
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