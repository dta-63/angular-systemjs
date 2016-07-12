// Import dependencies
import angular from 'angular';

/**
 * Application Settings
 * @type {object}
 * @property {string} name - The project name.
 * @property {boolean} debug - Value indicating whether application is running in debug mode.
 */
var configuration = {
    name: 'angular-components',
    debug: true
};


// Declare main module with dependencies
var imports = ['ngCookies', 'ngSanitize', 'ngComponentRouter', 'pascalprecht.translate', 'ngResource', 'ngMaterial', 'ngMessages'];

/**
 * Represents the application configuration block.
 * @constructor
 * @param {object} locationProvider - The angular location provider
 * @param {object} translateProvider - The angular translate provider
 */
function AppConfig(locationProvider, translateProvider) {
    // HTML 5 (remove # from url)
    locationProvider.html5Mode(true);

    // Translate plugin
    translateProvider.useSanitizeValueStrategy('sanitizeParameters');
    translateProvider.useStaticFilesLoader({
        prefix: '../i18n/',
        suffix: '.json'
    });

    // Default languages
    translateProvider.preferredLanguage('en');
}

// define AppConfig injection parameters
AppConfig.$inject = ['$locationProvider', '$translateProvider'];


// module configuration
angular.module('app', imports)
        .config(AppConfig)
        .value('$routerRootComponent', 'root');


// Bootstrap the webpage when DOM is ready
angular.element(document).ready(function() {
  angular.bootstrap(document, ['app'], {
    strictDi: true
  });
});

//https://github.com/crabcanon/angular-es6-demo