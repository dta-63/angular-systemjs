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
import LoaderService from './common/services/lazy-loader.service';
// Declare  dependencies with module names
let imports = ['ui.router', 'oc.lazyLoad', 'ngCookies', 'ngSanitize', 'pascalprecht.translate', 'ngResource', 'ngMaterial', 'ngMessages'];
// Active debug
let debug = true;
/**
 * Represents the application configuration block.
 * @constructor
 * @param {object} locationProvider - The angular location provider
 * @param {object} translateProvider - The angular translate provider
 * @param {object} stateProvider - Ui router provider to configure different states
 * @param {object} urlRouterProvider - Provider use to specify default url
 */
function AppConfig(locationProvider, 
                   translateProvider, 
                   stateProvider, 
                   urlRouterProvider) {

    // HTML 5 (remove # from url)
    locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

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
             resolve: {
                 load: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return System.import('app/login/login.module').then(function(m) {
                         return $ocLazyLoad.load(m['default']);
                    })
                }]
            }
        })
        .state('forgotten-password', {
            url: '/login',
            template: "<forgotten-password></forgotten-password>",
            resolve: {
                load: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return System.import('app/forgotten-password/forgotten.password.module').then(function(m) {
                         return $ocLazyLoad.load(m['default']);
                    })
                }]
            }
        });

    urlRouterProvider.otherwise('/login');
}

// define AppConfig injection parameters
AppConfig.$inject = ['$locationProvider', '$translateProvider','$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider'];


export default angular.module('app', imports)
                      .config(AppConfig)
                      .value('debug', debug)
                      .service(LoggerService.name, LoggerService)                     
                      .service(LoaderService.name, LoaderService);