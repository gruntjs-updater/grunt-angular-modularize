/*
 * grunt-angular-modularize
 * https://github.com/ericclemmons/grunt-angular-modularize
 *
 * Copyright (c) 2014 Eric Clemmons
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/**/*.js',
        '<%= nodeunit.tests %>',
        'test/fixtures/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    ngmodularize: {
      amd: {
        options: {
          paths: {
            app: '../../tmp/amd/app'
          },
          modules: ['app/app']
        },
        expand: true,
        cwd:    'examples/amd/app',
        src:    '**/*.js',
        dest:   'tmp/amd/app'
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'ngmodularize', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['clean', 'jshint', 'ngmodularize']);

};
