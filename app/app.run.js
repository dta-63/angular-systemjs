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
        
	angular.module('app')
                .run(AppRun)
		.component('root', {
			template: '<ng-outlet></ng-outlet>',
			$routeConfig: [
				{ path: '/login', name: 'Login', component: 'login' },
				{ path: '/forgottenpassword', name: 'ForgottenPassword', component: 'forgottenPassword' },
				{ path: '/**', redirectTo: ['Login'] }
			]
		});

})(window.angular);
