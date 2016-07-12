/**
 * Main Javascript file containing only :
 * - Application treatment on running
 * - Start application
 */
import app from 'app/app.config';

(function (angular) {
	'use strict';

	// Bootstrap the webpage when DOM is ready
	angular.element(document).ready(function() {
	    angular.bootstrap(document, [app.name], {
	      strictDi: true
	    });
	});


})(window.angular);
