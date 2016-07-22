/**
 * Represents the login component.
 */
class Login {

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

Login.$inject = ['LoggerService'];

export default Login;
