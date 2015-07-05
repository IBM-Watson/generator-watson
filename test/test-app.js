'use strict';

var path = require('path'),
    assert = require('yeoman-generator').assert,
    chai = require('chai').assert,
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
      'Gulpfile.js',
      '.eslintrc',
      '.gitignore',
      '.nvmrc',
      'js/app.js',
      'images/.gitkeep',
      'audio/.gitkeep',
      'videos/.gitkeep',
      'fonts/.gitkeep',
      'templates/_layout.html',
      'pages/index.html',
      'pages/markdown.md'
    ]);
  });


  it('templates files', function () {
    var bowerJSON = fs.readFileSync('bower.json', 'utf-8'),
        packageJSON = fs.readFileSync('package.json', 'utf-8'),
        indexHTML = fs.readFileSync('templates/_layout.html', 'utf-8');


    chai.include(bowerJSON, '"name": "hello-world",', '`bower.json` contains templated project slug');
    chai.include(packageJSON, '"name": "hello-world",', '`package.json` contains templated project slug');
    chai.include(indexHTML, '<title>{% if title %}{{ title }} | {% endif %}Hello World</title>', '`index.html` contains templated project name ')
  });
});
