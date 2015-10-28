// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-02-10 using
// generator-karma 0.9.0

module.exports = function (config) {
    'use strict';

    config.set({
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        usePolling: true,

        // base path, that will be used to resolve files and exclude
        basePath: '../',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine', 'es5-shim'],

        // list of files / patterns to load in the browser
        files: [
            //cross browser support
            'test/crossBrowser/string.js',

            // bower:js
            'bower_components/jquery/dist/jquery.js',
            'bower_components/jasmine/lib/jasmine-core/jasmine.js',
            'bower_components/jasmine-jquery/lib/jasmine-jquery.js',
            'bower_components/pouchdb/dist/pouchdb.js',
            // endbower

            //tests
            'test/spec/**/createdb.test.js',

            // JSON fixture
            {
                pattern:  'src/*.json',
                watched:  true,
                served:   true,
                included: false
            }
        ],

        // list of files / patterns to exclude
        exclude: [],

        // web server port
        port: 8080,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: [
            'PhantomJS'
        ],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        colors: true,
        preprocessors: {},
        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,
        //html to js
        reporters: ['progress', 'html']
    });
};
