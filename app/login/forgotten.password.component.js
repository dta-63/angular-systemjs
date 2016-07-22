/**
 * Represents the forgotten password component.
 */
class ForgottenPassword {

    constructor(logger){
        this.credentials = {};
    }
    

    /**
     * Request a new password.
     * @param {object} fpdForm - The  forgotten password  form with email.
     */
    requestPassword(fpdForm){
        if (!fpdForm.$valid){
            return;
        }
        logger.info('Email to send password : '+ this.credentials.email);
    };
}
    
ForgottenPassword.$inject = ['logger'];

export default ForgottenPassword;

    
