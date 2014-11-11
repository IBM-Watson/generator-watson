'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var WatsonGenerator = yeoman.generators.Base.extend({
  default: function () {
    this.composeWith('watson:environment', {
      options: {
        'skip-install': this.options['skip-install'],
        'skip-setup': this.options['skip-setup']
      }
    });
  }
});

module.exports = WatsonGenerator;
