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
                src: '**/*.*',
                dest: 'dist/',
                // flatten: true
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
        jsonlint: {
            sample: {
                src: [ 'dist/content.json' ]
            }
        }
    });

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
        'jsonlint',
        'karma:build',
        'clean:dist',
        'copy:dist'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};
