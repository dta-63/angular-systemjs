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
 * @param {object} logProvider - Provider to configure debug mode
 * @param {object} ocLazyLoadProvider - Provider to configure debug mode for the module ocLazyLoad
 */
function AppConfig(locationProvider, 
                   translateProvider, 
                   stateProvider, 
                   urlRouterProvider,
                   logProvider,
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
        })
        .state('dashboard', {
            url: '/dashboard',
            template: "<dashboard></dashboard>",
            resolve: {
                load: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return System.import('app/dashboard/dashboard.module').then(function(m) {
                         return $ocLazyLoad.load(m['default']);
                    })
                }]
            }
        });

    urlRouterProvider.otherwise('/login');

    // Debug 
    logProvider.debugEnabled(debug);
    ocLazyLoadProvider.config({
        debug: debug
    });
}

// define AppConfig injection parameters
AppConfig.$inject = ['$locationProvider', 
                     '$translateProvider',
                     '$stateProvider', 
                     '$urlRouterProvider', 
                     '$logProvider',
                     '$ocLazyLoadProvider'];


export default angular.module('app', imports)
                      .config(AppConfig)
                      .service(LoaderService.name, LoaderService);