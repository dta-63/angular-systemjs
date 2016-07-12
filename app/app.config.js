// Import dependencies
import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';
import 'angular-resource';
import 'angular-messages';
import 'angular-material';
import 'angular-sanitize';
import 'angular-translate';
import 'angular-translate-loader-static-files';


// Declare main module with dependencies
let imports = ['ui.router','ngCookies', 'ngSanitize', 'pascalprecht.translate', 'ngResource', 'ngMaterial', 'ngMessages'];

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


export default angular.module('app', imports).config(AppConfig);