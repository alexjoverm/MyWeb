
module.exports = function (gulp, plugins) {

    var webpack = require("webpack");
    var WebpackDevServer = require("webpack-dev-server");
    var webpackConfig = require("../webpack.config.js");

    gulp.task('webpack', [], function() {
        webpack(webpackConfig, function(err, stats) {
            if(err) throw new plugins.util.PluginError("webpack:build", err);
            plugins.util.log("[webpack:build]", stats.toString({
                colors: true
            }));
        });
    });

    gulp.task('webpack:serve', [], function() {
        new WebpackDevServer(webpack(webpackConfig), {
            hot: true
        }).listen(8080, "localhost", function(err) {
                if(err) throw new gutil.PluginError("webpack-dev-server", err);
                // Server listening
                plugins.util.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

                // keep the server alive or continue?
                // callback();
            });
    });
};



