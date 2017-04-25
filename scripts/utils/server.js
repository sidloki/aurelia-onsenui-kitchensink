const history = require('connect-history-api-fallback');
const bs = require('browser-sync').create();

function start() {
  return new Promise((resolve, reject) => {
    bs.init({
      online: false,
      open: false,
      port: 9000,
      server: {
        baseDir: ['.'],
        middleware: [history(), function(req, res, next) {
          res.setHeader('Access-Control-Allow-Origin', '*');
          next();
        }]
      }
    }, resolve);
  });
};

module.exports = {
  start: start,
  reload: bs.reload,
  watch: bs.watch
};
