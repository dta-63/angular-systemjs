
(function (angular) {
    'use strict';

    /**
     * Represents the login component.
     * @constructor
     * @param {object} logger - The application logger.
     */
    function LoginComponent(logger) {
        var _this = this;
        /**
         * User credentials.
         * @type {object}
         */
        this.credentials = {};

        /**
         * Log the user in.
         * @method
         * @param {object} loginForm - The login form with credentials.
         */
        this.login = function (loginForm) {
            if (!loginForm.$valid || this.isRunning) {
                return;
            }
            logger.info('Login : '+ this.credentials.login);
            logger.info('Redirect to dashboard');
            _this.$router.navigate(['Dashboard']);
        };

    }

    // Define LoginService injection parameters
    LoginComponent.$inject = ['logger'];

    // define angular component
    angular.module('app').component('login', {
        templateUrl: 'app/common/login/login.html',
        controller: LoginComponent,
        controllerAs: 'Login',
        bindings: { $router: '<' }
    });

})(window.angular);