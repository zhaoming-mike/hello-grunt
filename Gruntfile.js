module.exports = function (grunt) {
  // 项目配置
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.file %>.js <%= grunt.template.today("yyyy-mm-dd") %> */\n',
		//beautify:true,
		//mangle:false,
		//compress:true
      },
      /*build: {
        src: 'src/<%=pkg.file %>.js',
        dest: 'dest/<%= pkg.file %>.min.js'
      }*/
	  app_task:{
		  files:{
			  'dest/<%= pkg.file %>.min.js':['src/mike-grunt-demo-js-1.js','src/mike-grunt-demo-js-2.js']
		  }
	  }
    }
  });
  // 加载提供"uglify"任务的插件
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // 默认任务
  grunt.registerTask('default', ['uglify']);
}