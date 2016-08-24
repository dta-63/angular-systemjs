/* global module */
'use strict';
/**
 * Task runner configuration
 */
module.exports = function (grunt) {
    var buildNumber = new Date().getTime();
    // Determine bundles by read application states
    var states = grunt.file.readJSON('app/app.states.json');
    var bundles = [{
            'src': 'app/app.bootstrap.js',
            'dest': 'build/app.min.js'
        }];
    var patterns = [];
    for (var i in states) {
        if (states[i].module) {
            bundles.push({
                'src': states[i].module + ".js",
                'dest': 'build/bundles/' + states[i].name + '.min.js'
            });
            patterns.push({
                match: states[i].module,
                replacement: 'bundles/' + states[i].name + '.min.js?rel=' + buildNumber
            });
        }
    }


    grunt.initConfig({
        // Clean build folder
        clean: {
            dist: {
                src: ['./build']
            }
        },
        // SystemJS build configuration
        systemjs: {
            options: {
                sfx: true,
                sourceMaps: false,
                baseURL: './',
                configFile: './system.config.js',
                minify: false,
                build: {
                    separateCSS: true,
                    mangle: false
                }
            },
            dist: {
                files: bundles
            }
        },
        // Copy other files than systemjs components
        copy: {
            dist: {
                files: [{
                        expand: true,
                        dot: true,
                        dest: './build',
                        src: [
                            '*.ico',
                            'i18n/**'
                        ]
                    }]
            }
        },
        processhtml: {
            dist: {
                files: {
                    'build/index.html': ['index.html']
                }
            }
        },
        replace: {
            // Replace states files with the new bundle file
            states: {
                options: {
                    usePrefix: false,
                    patterns: patterns
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['build/app.min.js'],
                        dest: 'build/'
                    }
                ]
            },
            // Replace build number in index.html
            html: {
                options: {
                    usePrefix: false,
                    patterns: [
                         {
                            match: 'timestamp',
                            replacement: buildNumber
                        }
                    ]
                },
                files: [
                    {
                        expand: true, 
                        flatten: true, 
                        src: ['build/index.html'],
                        dest: 'build/'
                    }
                ]
            }
        }
    });
    // Build tasks
    grunt.loadNpmTasks('grunt-systemjs-builder');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-replace');

    grunt.registerTask('build', ['clean', 'systemjs', 'copy', 'processhtml', 'replace']);

};