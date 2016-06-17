module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        less: {
            development: {
                options: {
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    'public/css/main.css': 'src/less/main.less'
                }
            }
        },
        watch: {
            styles: {
                files: ['src/less/**/*.less', 'src/js/**/*.js'],
                tasks: ['less', 'concat'],
                options: {
                    nospawn: true,
                    livereload: true
                }
            }
        },
        concat: {
            options: {
                separator: '\n'
            },
            dist: {
                src: [
                    'src/js/main.js'
                ],
                dest: 'public/js/main.js'
            }
        }
    });
};
