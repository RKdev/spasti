'use strict';

module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        //this is for convenience, used in other configs
        files: {
            lint: ['Gruntfile.js', 'src/**/*.js', 'tests/**/*.js'],
            test: ['tests/**/*.js'],
            
            //note: src/vendor DOES need to be included in the build, but not until I can make it work
            //and pass the tests properly
            build: ['util/build_intro.js', "src/**/*.js", 'util/build_outro.js']
        },
        watch: {
            all: {
                files: "<%= files.lint %>",
                tasks: ["default"],
                options: {
                    interrupt: true
                }
            }
        },
        jshint: {
            options: {
                curly: true
                ,eqeqeq: true
                ,immed: true
                ,latedef: true
                ,newcap: true
                ,noarg: true
                ,sub: true
                ,undef: true
                ,boss: true
                ,eqnull: true
                ,node: true
                ,es5: true
                ,strict: true
                ,browser: true
                ,laxcomma: true
                ,globals: {
                    ,should: true
                    ,it: true
                    ,before: true
                    ,after: true
                    ,beforeEach: true
                    ,afterEach: true
                    ,define: true
                    ,require: true
                    ,describe: true
                    ,CANNON: true
                    ,THREE: true
                    ,self: true
                    ,Javelin: true
                    ,Spasti: true
                    //,window: true
                }
            },
            all: "<%= files.lint %>"
        },
        simplemocha: {
            options: {
                globals: ['should', 'it', 'define','require','describe','Javelin', 'Spasti', 'THREE', 'window', 'self', 'before','after','beforeEach','afterEach'],
                timeout: 3000,
                ignoreLeaks: false,
                ui: 'bdd',
                reporter: 'tap'
            },
            all: {
                src: '<%= files.test %>'
            }
        },
        concat: {
            options: {
                separator: ";"
            },
            dist: {
                src: "<%= files.build %>",
                dest: 'build/spasti.js'
            }
        },
        uglify: {
            //not entirely sure whether or not I can use mangle... will have to experiment
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'build/spasti.min.js': ['build/spasti.js']
                }
            }
        }
    });
    
    //register commands from plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-simple-mocha');
    
    // Default task
    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'simplemocha']);
};
