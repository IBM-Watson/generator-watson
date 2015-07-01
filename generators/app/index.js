'use strict';
var yeoman = require('yeoman-generator'),
    chalk = require('chalk'),
    path = require('path'),
    _ = require('lodash'),
    _s = require('underscore.string'),
    yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the terrific ' + chalk.red('Watson') + ' generator!'
    ));

    var prompts = [{
      type: 'string',
      name: 'project',
      message: 'What is your project\'s name?',
      validate: function (input) {
        if (input === '') {
          return 'Please enter a project name';
        }
        else {
          return true;
        }
      }
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      this.appname = _s.slugify(props.project);
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  configuring: {
    enforceFolderName: function () {
      if (this.appname !== _.last(this.destinationRoot().split(path.sep))) {
        this.destinationRoot(this.appname);
      }

      this.config.save();
    }
  },

  writing: {
    app: function () {
      // Package.json
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        {
          'name': this.appname
        }
      );
      // Bower.json
      this.fs.copyTpl(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json'),
        {
          'name': this.appname
        }
      );
      // Gulpfile
      this.fs.copy(
        this.templatePath('Gulpfile.js'),
        this.destinationPath('Gulpfile.js')
      );
    },

    dotfiles: function () {
      // Editor Config
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      // ESLint RC
      this.fs.copy(
        this.templatePath('eslintrc'),
        this.destinationPath('.eslintrc')
      );
      // Gitignore
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
    },

    projectfiles: function () {
      // Gulp Tasks
      this.fs.copy(
        this.templatePath('tasks/**'),
        this.destinationPath('tasks')
      );
      // JavaScript and Sass Files
      this.fs.copy(
        this.templatePath('js/**'),
        this.destinationPath('js')
      );
      this.fs.copy(
        this.templatePath('sass/**'),
        this.destinationPath('sass')
      );
      // Gitkeep Folders
      this.fs.copy(
        this.templatePath('gitkeep'),
        this.destinationPath('images/.gitkeep')
      );
      this.fs.copy(
        this.templatePath('gitkeep'),
        this.destinationPath('audio/.gitkeep')
      );
      this.fs.copy(
        this.templatePath('gitkeep'),
        this.destinationPath('videos/.gitkeep')
      );
      this.fs.copy(
        this.templatePath('gitkeep'),
        this.destinationPath('fonts/.gitkeep')
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
