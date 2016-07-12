
(function(angular){
    'use strict';
    
    /**
     * Represents the forgotten password component.
     * @constructor
     * @param {object} logger - The application logger.
     */
    function ForgottenPasswordComponent(logger){
       
        /**
         * User credentials.
         * @type {object}
         */
        this.credentials = {};
        
        /**
         * Request a new password.
         * @method
         * @param {object} fpdForm - The  forgotten password  form with email.
         */
        this.requestPassword = function(fpdForm){
            if (!fpdForm.$valid){
                return;
            }
            logger.info('Email to send password : '+ this.credentials.email);
        };
    }
    
    // Define ForgottenPasswordComponent injection parameters
    ForgottenPasswordComponent.$inject = ['logger'];
    
    // define angular component
    angular.module('app').component('forgottenPassword', {
        templateUrl: 'app/common/login/forgotten.password.html',
        controller: ForgottenPasswordComponent,
        controllerAs: 'fpd'
    });
    
})(window.angular);