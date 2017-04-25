#!/usr/bin/env node
const fs = require('fs-extra-promise')
const path = require('path');
const builder = require('./utils/builder');
const dest = 'export';
const list = [
  '.nojekyll',
  'index.html',
  // 'favicon.ico',
  'LICENSE',
  'dist/',
  'systemjs.config.js',
  'node_modules/systemjs/dist/system.js',
  'node_modules/onsenui/css/onsenui.css',
  'node_modules/onsenui/css/onsen-css-components.min.css',
  'node_modules/onsenui/css/font_awesome/css/font-awesome.min.css',
  'node_modules/onsenui/css/font_awesome/fonts/',
  'node_modules/onsenui/css/ionicons/css/ionicons.min.css',
  'node_modules/onsenui/css/ionicons/fonts/',
  'node_modules/onsenui/css/material-design-iconic-font/css/material-design-iconic-font.min.css',
  'node_modules/onsenui/css/material-design-iconic-font/fonts/'
]

builder.build().then(() => {
  fs.emptyDirAsync(dest).then(() => {
    return Promise.all(list.map((item) => {
      return fs.copyAsync(item, path.join(dest, item));
    }));
  });
});
