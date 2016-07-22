'use strict';

// Import dependencies
import angular from 'angular';
import 'angular-ui-router';
import 'ocLazyLoad';
import 'angular-cookies';
import 'angular-resource';
import 'angular-messages';
import 'angular-material';
import 'angular-sanitize';
import 'angular-translate';
import 'angular-translate-loader-static-files';
// Common dependencies
import LoggerService from './common/services/logger.service';
// Declare  dependencies with module names
let imports = ['ui.router', 'ngCookies', 'ngSanitize', 'pascalprecht.translate', 'ngResource', 'ngMaterial', 'ngMessages'];
/**
 * Represents the application configuration block.
 * @constructor
 * @param {object} locationProvider - The angular location provider
 * @param {object} translateProvider - The angular translate provider
 * @param {object} stateProvider - Ui router provider to configure different states
 * @param {object} urlRouterProvider - Provider use to specify default url
 */
function AppConfig(locationProvider, translateProvider, stateProvider, urlRouterProvider) {
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

    // States configuration
    stateProvider
        .state('login', {
            url: '/login',
            template: "<login></login>",
        })
        .state('forgotten-password', {
            url: '/login',
            template: "<forgotten-password></forgotten-password>",
        });

    urlRouterProvider.otherwise('/');
}

// define AppConfig injection parameters
AppConfig.$inject = ['$locationProvider', '$translateProvider','$stateProvider', '$urlRouterProvider'];


export default angular.module('app', imports)
                      .config(AppConfig)
                      .value('debug', true)
                      .service(LoggerService.name, LoggerService);