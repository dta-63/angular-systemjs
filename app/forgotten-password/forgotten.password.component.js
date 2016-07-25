/**
 * Represents the forgotten password component.
 */
class ForgottenPassword {

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
     * Request a new password.
     * @param {object} fpdForm - The  forgotten password  form with email.
     */
    requestPassword(fpdForm){
        if (!fpdForm.$valid){
            return;
        }
        this.$log.debug('Email to send password : '+ this.credentials.email);
    };
}
    
ForgottenPassword.$inject = ['$log'];

export default ForgottenPassword;

    
