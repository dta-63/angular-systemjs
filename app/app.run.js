/**
 * Main Javascript file containing only :
 * - Application treatment on running
 * - Start application
 */
import 'app/app.config';

(function (angular) {
	'use strict';
       
    /**
	 * Represents the application run block.
	 * @constructor
	 */
	function AppRun() {

    }

      
    // define AppRun injection parameters        
    AppRun.$inject = [];
        
	angular.module('app').run(AppRun);

})(window.angular);
