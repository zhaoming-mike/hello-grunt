###This is demo project for learning grunt.

E:\grunt-temp>grunt
grunt-cli: The grunt command line interface. (v0.1.13)

Fatal error: Unable to find local grunt.

If you're seeing this message, either a Gruntfile wasn't found or grunt
hasn't been installed locally to your project. For more information about
installing and configuring grunt, please see the Getting Started guide:

http://gruntjs.com/getting-started

E:\grunt-temp>npm install
grunt-contrib-copy@0.4.1 node_modules\grunt-contrib-copy

grunt-contrib-requirejs@0.4.4 node_modules\grunt-contrib-requirejs
└── requirejs@2.1.20

grunt-contrib-clean@0.5.0 node_modules\grunt-contrib-clean
└── rimraf@2.2.8

grunt-strip@0.2.1 node_modules\grunt-strip
└── falafel@0.1.6 (esprima@1.0.4)

grunt@0.4.5 node_modules\grunt
├── eventemitter2@0.4.14
├── dateformat@1.0.2-1.2.3
├── which@1.0.9
├── async@0.1.22
├── colors@0.6.2
├── getobject@0.1.0
├── lodash@0.9.2
├── hooker@0.2.3
├── rimraf@2.2.8
├── grunt-legacy-util@0.2.0
├── exit@0.1.2
├── coffee-script@1.3.3
├── iconv-lite@0.2.11
├── underscore.string@2.2.1
├── nopt@1.0.10 (abbrev@1.0.7)
├── grunt-legacy-log@0.1.2 (grunt-legacy-log-utils@0.1.1, lodash@2.4.2, underscore.string@2.3.3)
├── minimatch@0.2.14 (sigmund@1.0.1, lru-cache@2.7.0)
├── glob@3.1.21 (inherits@1.0.2, graceful-fs@1.2.3)
├── js-yaml@2.0.5 (esprima@1.0.4, argparse@0.1.16)
└── findup-sync@0.1.3 (lodash@2.4.2, glob@3.2.11)

grunt-contrib-uglify@0.2.7 node_modules\grunt-contrib-uglify
├── grunt-lib-contrib@0.6.1 (zlib-browserify@0.0.1)
└── uglify-js@2.4.24 (async@0.2.10, uglify-to-browserify@1.0.2, source-map@0.1.34, yargs@3.5.4)

grunt-contrib-jshint@0.6.5 node_modules\grunt-contrib-jshint
└── jshint@2.1.11 (console-browserify@0.1.6, underscore@1.4.4, minimatch@0.4.0, shelljs@0.1.4, cli@0.4.5)

express@3.21.2 node_modules\express
├── escape-html@1.0.2
├── merge-descriptors@1.0.0
├── commander@2.6.0
├── cookie-signature@1.0.6
├── etag@1.7.0
├── content-disposition@0.5.0
├── basic-auth@1.0.3
├── methods@1.1.1
├── fresh@0.3.0
├── range-parser@1.0.2
├── cookie@0.1.3
├── content-type@1.0.1
├── utils-merge@1.0.0
├── vary@1.0.1
├── parseurl@1.3.0
├── depd@1.0.1
├── mkdirp@0.5.1 (minimist@0.0.8)
├── debug@2.2.0 (ms@0.7.1)
├── proxy-addr@1.0.8 (forwarded@0.1.0, ipaddr.js@1.0.1)
├── send@0.13.0 (destroy@1.0.3, statuses@1.2.1, ms@0.7.1, mime@1.3.4, on-finished@2.3.0, http-errors@1.3.1)
└── connect@2.30.2 (bytes@2.1.0, serve-static@1.10.0, vhost@3.0.1, response-time@2.3.1, pause@0.1.0, method-override@2.3.5
, on-headers@1.0.1, basic-auth-connect@1.0.0, cookie-parser@1.3.5, qs@4.0.0, morgan@1.6.1, serve-favicon@2.3.0, connect-timeo
ut@1.6.2, http-errors@1.3.1, finalhandler@0.4.0, body-parser@1.13.3, multiparty@3.3.2, type-is@1.6.9, serve-index@1.7.2, comp
ression@1.5.2, errorhandler@1.4.2, express-session@1.11.3, csurf@1.8.3)

E:\grunt-temp>grunt
Running "uglify:app_task" (uglify) task
File "dest/mike-grunt-demo-js-all.min.js" created.

Done, without errors.

E:\grunt-temp>