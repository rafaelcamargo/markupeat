module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'src/*.js']
    },
    uglify: {
      options: {
        banner: '/*\n' +
                '* <%= pkg.name %> v<%= pkg.version %> ' +
                '(<%= grunt.template.today("yyyy-mm-dd") %>)\n' +
                '* License: <%= pkg.license %>\n' +
                '* Url: <%= pkg.url %>\n' +
                '* Repository: <%= pkg.repository.url %>\n' +
                '*/\n'
      },
      my_target: {
        files: {
          'releases/markupeat-v<%= pkg.version %>.min.js': ['src/markupeat.js']
        }
      }
    },
    stylus: {
      compile: {
        files: {
          'welcome/assets/css/main.css': ['welcome/assets/styl/*.styl']
        }
      }
    },
    watch: {
      css: {
        files: 'welcome/assets/styl/*.styl',
        tasks: ['stylus']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('release', ['jshint','uglify']);
};