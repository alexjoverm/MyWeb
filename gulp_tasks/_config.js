var path = require('path');


var paths = {};
    paths.BASE          = 'www';
    paths.CLIENT        = path.join(paths.BASE, 'client');
    paths.COMPONENTS    = path.join(paths.BASE, 'components');
    paths.SERVER        = path.join(paths.BASE, 'server');

    paths.ALL_JS        = [paths.CLIENT + '/**/*.js', paths.COMPONENTS + '/**/*.js', paths.COMPONENTS + '/**/*.jsx'];
    paths.DEST          = path.join(paths.CLIENT, 'build');


module.exports = {
    path: paths
};

