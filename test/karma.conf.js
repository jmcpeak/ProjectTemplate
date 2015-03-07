// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-02-04 using
// generator-karma 0.8.3

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
        // bower:js
        'bower_components/jquery/dist/jquery.js',
        'bower_components/angular/angular.js',
        'bower_components/bootstrap/dist/js/bootstrap.js',
        'bower_components/angular-animate/angular-animate.js',
        'bower_components/angular-cookies/angular-cookies.js',
        'bower_components/angular-resource/angular-resource.js',
        'bower_components/angular-route/angular-route.js',
        'bower_components/angular-sanitize/angular-sanitize.js',
        'bower_components/angular-touch/angular-touch.js',
        'bower_components/angular-mocks/angular-mocks.js',
        // endbower
        'src/**/*.css',
        'src/**/*.js',
        '.tmp/templates-app.js'
        //'src/**/*.tpl.html',
        //{pattern: 'src/mock/*.json', watched: true, served: true, included: false}
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 9025,
    runnerPort: 9100,
    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],

    // Which plugins to enable
    plugins: [
        'karma-chrome-launcher',
        'karma-phantomjs-launcher',
        //'karma-ng-html2js-preprocessor',
        'karma-jasmine',
        'karma-coverage'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_DEBUG,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
    preprocessors: {
        'src/**/!(*.spec).js': ['coverage']
        //,'src/**/*.tpl.html': ['ng-html2js']
    },
    //ngHtml2JsPreprocessor: {
    //    stripPrefix: 'src/app/',
    //    prependPrefix: '',
    //    moduleName: 'templates-app'
    //},
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      reporters: [
        {
          type: 'html',
          dir: 'coverage/'
        },
        {
          type: 'text'
        },
        {
          type: 'clover'
        }
      ]
    }
  });
};