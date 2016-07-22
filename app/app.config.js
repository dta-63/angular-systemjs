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
 * @param {object} ocLazyLoadProvider - Provider for lazy loading module
 */
function AppConfig(locationProvider, 
                   translateProvider, 
                   stateProvider, 
                   urlRouterProvider, 
                   ocLazyLoadProvider) {

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

    //TODO MODULE LOADER
    //https://oclazyload.readme.io/docs/systemjs
    stateProvider
        .state('login', {
            url: '/login',
            template: "<login></login>",
            resolve: {
                load: ['$ocLazyLoad', function ($ocLazyLoad) {
                    System.import('app/login/login.module.js').then(function(m) {
                         return $ocLazyLoad.load(m.coreStates);
                    })
                }]
            }
        })
        .state('forgotten-password', {
            url: '/login',
            template: "<forgotten-password></forgotten-password>",
            resolve: {
                load: ['$ocLazyLoad', function ($ocLazyLoad) {
                    System.import('app/forgotten-password/forgotten.password.module.js').then(function(m) {
                         return $ocLazyLoad.load(m.coreStates);
                    })
                }]
            }
        });

    urlRouterProvider.otherwise('/login');

    // Active debug mode for the file lazy loading
    ocLazyLoadProvider.config({
        debug: debug
    });
}

// define AppConfig injection parameters
AppConfig.$inject = ['$locationProvider', '$translateProvider','$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider'];


export default angular.module('app', imports)
                      .config(AppConfig)
                      .value('debug', debug)
                      .service(LoggerService.name, LoggerService);