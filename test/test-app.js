'use strict';

var path = require('path'),
    assert = require('yeoman-generator').assert,
    helpers = require('yeoman-generator').test,
    fs = require('fs'),
    os = require('os');

describe('Watson:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      .withPrompts({ project: 'Hello World' })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'bower.json',
      'package.json',
      '.editorconfig',
      'Gulpfile.js'
    ]);
  });

  it('templates bower.json', function () {
    assert.fileContent('bower.json',
                        '{' + '\n' +
                        '  "name": "hello-world",' + '\n' +
                        '  "version": "0.0.0",' + '\n' +
                        '  "dependencies": {' + '\n' +
                        '    "watson-design-guide": "^1.1.0"' + '\n' +
                        '  }' + '\n' +
                        '}');
  });

  it('templates package.json', function () {
    assert.fileContent('package.json',
                        '{' + '\n' +
                        '  "name": "hello-world",' + '\n' +
                        '  "version": "0.0.0",' + '\n' +
                        '  "scripts": {' + '\n' +
                        '    "postinstall": "npm run install:bower",' + '\n' +
                        '    "install:bower": "npm run bower install",' + '\n' +
                        '    "bower": "./node_modules/bower/bin/bower",' + '\n' +
                        '    "gulp": "./node_modules/gulp/bin/gulp.js"' + '\n' +
                        '  },' + '\n' +
                        '  "devDependencies": {' + '\n' +
                        '    "gulp": "^3.8.11"' + '\n' +
                        '  },' + '\n' +
                        '  "dependencies": {' + '\n' +
                        '    "bower": "^1.4.1"' + '\n' +
                        '  }' + '\n' +
                        '}');
  });
});
