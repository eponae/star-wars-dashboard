module.exports = function (config) {
  config.set({

    basePath: './',

    files: [
      'node_modules/babel-polyfill/dist/polyfill.min.js',
      'node_modules/angular/angular.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/angular-ui-router/release/angular-ui-router.min.js',
      'node_modules/angular-animate/angular-animate.min.js',
      'node_modules/angular-aria/angular-aria.min.js',
      'node_modules/angular-messages/angular-messages.min.js',
      'node_modules/angular-material/angular-material.min.js',
      'app/scripts/app.js',
      'app/scripts/app-config.js',
      'app/scripts/**/!(app|app-config).js'
    ],

    preprocessors: {
      'app/scripts/app.js': ['babel', 'webpack'],
      'app/scripts/app-config.js': ['babel', 'webpack'],
      'app/scripts/**/!(app|app-config).js': ['babel', 'webpack']
    },

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-babel-preprocessor',
      'karma-webpack'
    ],

    babelPreprocessor: {
      options: {
        presets: ['env'],
        sourceMap: 'inline'
      },
      filename: function (file) {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: function (file) {
        return file.originalPath;
      }
    },

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    webpack: require('./webpack.config.test.js'),

    webpackMiddleware: {
      stats: 'errors-only'
    }

  });
};
