import 'app/common/services/logger.service';

/**
 * Represents the login component.
 */
class LoginComponent() {

    /*@ngInject*/
    constructor(logger){
        this.credentials = {};
    }

    /**
     * Log the user in.
     * @param {object} loginForm - The login form with credentials.
     */
    login(loginForm) {
        if (!loginForm.$valid || this.isRunning) {
            return;
        }
        logger.info('Login : '+ this.credentials.login);
        logger.info('Redirect to dashboard');       
    };

}


// define angular component
angular.module('app').component('login', {
    templateUrl: 'app/common/login/login.html',
    controller: LoginComponent,
    controllerAs: 'Login'
});

