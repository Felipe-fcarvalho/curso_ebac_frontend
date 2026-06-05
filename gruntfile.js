module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development']
            },
            scripts: {
                files: ['src/scripts/**/*.js'],
                tasks: ['terser:dev']
            }
        },
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.css'
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: '../src/scripts/main.js'
                        }
                    ]
                }, files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['./src/index.html'],
                        dest: 'dev/'
                    }
                ]
            },
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.min.css'
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: './scripts/main.min.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['./src/index.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        terser: {
            options: {
                compress: {
                    drop_console: false
                }
            },
            dev: {
                options: {
                    mangle: false,
                    compress: false
                },
                files: {'dev/scripts/main.min.js': ['src/scripts/main.js']}
            },
            prod: {
                options: {
                    mangle: true,
                    compress: {
                        drop_console: true,
                        drop_debugger: true,
                        passes: 2
                    }
                },
                files: {'dist/scripts/main.min.js': ['src/scripts/main.js']}
            } 
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-terser');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production', 'replace:dist', 'terser:prod']);
};