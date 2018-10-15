const path = require('path');
const fs = require('fs');
const url = require('url');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    appJs: resolveApp('./src/main.js'),
    appSrc: resolveApp('./src'),
    buildPath: resolveApp('./dist'),
    // publicPath: resolveApp('./build'),
    appHtml: resolveApp('./src/index.html')
};