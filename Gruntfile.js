'use strict';

module.exports = function (grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    var config = {};

    config['clean'] = {
        build: {
            dot: true,
            src: [
                'dist/*',
                '!dist/.git*'
            ]
        }
    };

    config['htmlmin'] = {
        build: {
            options: {
                collapseBooleanAttributes: true,
                removeAttributeQuotes: true,
                removeRedundantAttributes: true,
                removeEmptyAttributes: true
            },
            files: [{
                expand: true,
                cwd: 'src',
                src: '{,*/}*.html',
                dest: 'dist'
            }]
        }
    };

    config['useminPrepare'] = {
        options: {
            dest: 'dist'
        },
        html: 'src/index.html'
    };

    config['usemin'] = {
        options: {
            dirs: ['dist']
        },
        html: ['dist/{,*/}*.html']
    };

        config['uglify'] = {
        options: {
            mangle: false
        }
    };

    config['rev'] = {
        files: {
            src: [
                'dist/scripts/{,*/}/*.js'
            ]
        }
    };

    grunt.initConfig(config);

    var tasks = [
        'clean',
        'useminPrepare',
        'htmlmin',
        'concat',
        'uglify',
        'rev',
        'usemin'
    ];

    grunt.registerTask('build', tasks);
};
