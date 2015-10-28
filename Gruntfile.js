'use strict';


module.exports = function (grunt) {

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        src: 'src',
        dist: 'dist',
        appName: 'toefl-content'
    };

    // Automatically load required Grunt tasks
    require('jit-grunt')(grunt, {});

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        appConfig: appConfig,
        // Make sure code styles are up to par and there are no obvious mistakes

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        'dist/content.json',
                        'dist/content.db'
                    ]
                }]
            }
        },
        copy:{
            dist: {
                expand: true,
                cwd: 'src/',
                src: '*',
                dest: 'dist/',
                flatten: true
            }
        },
        wiredep: {
            test: {
                devDependencies: true,
                src: '<%= karma.unit.configFile %>',
                ignorePath: /\.\.\//,
                fileTypes: {
                    js: {
                        block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
                        detect: {
                            js: /'(.*\.js)'/gi
                        },
                        replace: {
                            js: '\'{{filePath}}\','
                        }
                    }
                }
            }
        },
        // Test settings
        karma: {
            unit: {
                configFile: 'test/karma-unit.conf.js',
                browsers: ['Chrome','Phantom']
            },
            build: {
                configFile: 'test/karma-unit.conf.js',
                singleRun: true
            }
        },

        jasmine_node: {
            options: {
              forceExit: true,
              match: '.',
              matchall: false,
              extensions: 'js',
              specNameMatcher: 'spec'
            },
            all: ['test/spec/']
          },

            jasmine_nodejs: {
        // task specific (default) options
        options: {
            specNameSuffix: "spec.js", // also accepts an array
            helperNameSuffix: "helper.js",
            useHelpers: false,
            stopOnFailure: false,
            // configure one or more built-in reporters
            reporters: {
                console: {
                    colors: true,
                    cleanStack: 1,       // (0|false)|(1|true)|2|3
                    verbosity: 4,        // (0|false)|1|2|3|(4|true)
                    listStyle: "indent", // "flat"|"indent"
                    activity: false
                },
                // junit: {
                //     savePath: "./reports",
                //     filePrefix: "junit-report",
                //     consolidate: true,
                //     useDotNotation: true
                // },
                // nunit: {
                //     savePath: "./reports",
                //     filename: "nunit-report.xml",
                //     reportName: "Test Results"
                // },
                // terminal: {
                //     color: false,
                //     showStack: false,
                //     verbosity: 2
                // },
                // teamcity: true,
                // tap: true
            },
            // add custom Jasmine reporter(s)
            customReporters: []
        },
        app: {
            // target specific options
            options: {
                useHelpers: true
            },
            // spec files
            specs: [
                "test/spec/**"
            ],
            helpers: [
                "test/helpers/**"
            ]
        }
    }


    });
    
    grunt.loadNpmTasks('grunt-jasmine-nodejs');
    grunt.loadNpmTasks('grunt-jasmine-node');

    grunt.registerTask('assaf', 'jasmine_nodejs:app');

    grunt.registerTask('test',function(env){
        if(!env){
            env = 'unit';
        }
        grunt.task.run([
            'wiredep:test',
            'karma:' + env
        ]);
    });

    grunt.registerTask('build', [
        'karma:build',
        'clean:dist',
        'copy:dist'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};
