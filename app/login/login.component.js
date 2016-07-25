/**
 * Represents the login component.
 */
class Login {

    /**
     * Component constructor.
     * @constructor
     * @param {object} $log - Angular logger service.
     */
    constructor($log){
        this.credentials = {};
        this.$log = $log;
    }

    /**
     * Log the user in.
     * @param {object} loginForm - The login form with credentials.
     */
    login(loginForm) {
        if (!loginForm.$valid || this.isRunning) {
            return;
        }
        this.$log.debug('Login : '+ this.credentials.login);
        this.$log.debug('Redirect to dashboard');       
    };

}

Login.$inject = ['$log'];

export default Login;
