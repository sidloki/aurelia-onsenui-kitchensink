#!/usr/bin/env node
const path = require('path');
const server = require('./utils/server');
const builder = require('./utils/builder');


function onFileChange(filename) {
  if (filename.indexOf('src/') === 0) {
    builder.invalidate(path.resolve(filename));
    builder.bundle().then(() => server.reload());
  } else if (filename === 'package.json') {
    builder.build().then(() => server.reload());
  } else {
    server.reload();
  }
};

builder.build()
  .then(() => {
    server.watch(['src/', 'package.json', 'index.html']).on('change', onFileChange);
  })
  .then(() => server.start());
