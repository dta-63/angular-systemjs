/**
 * Represents the login component.
 */
class Login {

    /**
     * Component constructor.
     * @constructor
     * @param {object} $log - Angular logger service.
     * @param {object} $state - Ui router state service to redirect user on the dashboard.
     */
    constructor($log, $state){
        this.credentials = {};
        this.$log = $log;
        this.$state = $state;
    }

    /**
     * Log the user in.
     * @param {object} loginForm - The login form with credentials.
     */
    login(loginForm) {
        if (!loginForm.$valid) {
            return;
        }
        this.$log.debug('Login : '+ this.credentials.login);
        this.$state.go('dashboard');
    };

}

Login.$inject = ['$log', '$state'];

export default Login;
