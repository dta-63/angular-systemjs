/* global System */

// Configure module loader
System.config({
  baseURL: '/',

  // Set paths for third-party libraries as modules
  paths: {
    'angular': '../bower_components/angular/angular.js',
    'angular-resource': '../bower_components/angular-resource/angular-resource.js',
    'angular-aria': '../bower_components/angular-aria/angular-aria.js',
    'angular-messages': '../bower_components/angular-aria/angular-messages.js',
    'angular-animate': '../bower_components/angular-aria/angular-animate.js',
    'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize.js',
    'angular-cookies': '../bower_components/angular-cookies/angular-cookies.js',
    'angular-router': '../bower_components/angular-component-router/angular_1_router.js',
    'angular-translate': '../bower_components/angular-translate/angular-translate.js',
    'angular-translate-loader-static-files': '../bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
    'angular-material': '../bower_components/angular-material/angular-material.js',
    'es6-shim': '../bower_components/es6-shim/es6-shim.js',
    'babel': '../node_modules/babel-core/lib/api/browser.js',
    'es6-module-loader': '../node_modules/es6-module-loader/dist/es6-module-loader.js',
    'systemjs': '../node_modules/systemjs/dist/system.js',
    'system-polyfills': '../node_modules/systemjs/dist/system-polyfills.js'
  },

  // opt in to Babel for transpiling over Traceur
  transpiler: 'babel'
});
