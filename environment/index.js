'use strict';
var util = require('util'),
    os = require('os'),
    chalk = require('chalk'),
    sh = require('execSync'),
    yeoman = require('yeoman-generator');


var WatsonGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.win = /^win/.test(os.platform());
    this.home = process.env[this.win ? 'USERPROFILE' : 'HOME'];
  },

  prompting: function () {
    var done = this.async(),
        prompts = [];

    prompts.push({
      type: 'list',
      name: 'vms',
      message: 'What Virtual Machine would you like to use as a base?',
      choices: ['IBM-Watson/front-end', 'Other']
    });

    prompts.push({
      type: 'string',
      name: 'other',
      message: 'What is the name of your Virtual Machine? ' + chalk.red('(Required)'),
      when: function (answers) {
        return answers.vms === 'Other' ? true : false;
      },
      validate: function (answer) {
        if (answer === '') {
          return 'You must provide a Virtual Machine';
        } else {
          return true;
        }
      }
    });


    this.prompt(prompts, function (answers) {

      this.vm = answers.vms === 'Other' ? answers.other : answers.vms;

      done();
    }.bind(this));
  },

  configuring: function () {
    var settings = {
      windows: this.win,
      home: this.home,
      vm: this.vm
    };

    this.config.set(settings);
  },

  writing: function () {
    this.template('Vagrantfile', 'Vagrantfile');
  },

  install: function () {
    if (!this.options['skip-install'] && !this.options['skip-setup']) {
      sh.run('vagrant box update');
      sh.run('vagrant up');
    }
  }
});

module.exports = WatsonGenerator;
