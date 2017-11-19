module.exports = function(config) {
  config.set({

    basePath: './',

    files: [
      'node_modules/angular/angular.min.js',
      'node_modules/angular-ui-router/release/angular-ui-router.min.js',
      'node_modules/angular-animate/angular-animate.min.js',
      'node_modules/angular-aria/angular-aria.min.js',
      'node_modules/angular-messages/angular-messages.min.js',
      'node_modules/angular-material/angular-material.min.js',
      'app/scripts/app-config.js',
      'app/scripts/app.js',
      'app/scripts/**/!(app|app-config).js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
