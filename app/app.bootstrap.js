/**
 * Main Javascript file containing only :
 * - Application bootstrap
 * - Start application
 */
'use strict';

import app from 'app/app.config';

// Bootstrap the webpage when DOM is ready
angular.element(document).ready(function() {
    angular.bootstrap(document, [app.name], {
      strictDi: true
    });
});


