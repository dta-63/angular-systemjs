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
import 'jspm_packages/github/angular/bower-material@1.0.9/angular-material.css';

// Common dependencies
import LazyLoader from './common/services/loader.service';
import states from './app.states.json!';

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
    for(let i in states) {
        let state = states[i];
        if(state.default){
            urlRouterProvider.otherwise(state.url);
        }
        if(state.module) {
            state.resolve =  {
                load: ['LazyLoader', function (loader) {
                    return loader.load(this.module);
                }.bind(state)]
            }
        }
        stateProvider.state(state.name, state);
    }
   

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
                      .service(LazyLoader.name, LazyLoader);