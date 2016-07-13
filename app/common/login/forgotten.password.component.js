import 'app/common/services/logger.service';

/**
 * Represents the forgotten password component.
 */
class ForgottenPasswordComponent() {

    /*@ngInject*/
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
    
    
// define angular component
angular.module('app').component('forgottenPassword', {
    templateUrl: 'app/common/login/forgotten.password.html',
    controller: ForgottenPasswordComponent,
    controllerAs: 'fpd'
});
    
