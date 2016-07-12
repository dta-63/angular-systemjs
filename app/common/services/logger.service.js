/* global configuration */

(function(angular){
    'use strict';
        
    /**
     * Represents the logger service.
     * @constructor
     */
    function LoggerService(){        
         /**
         * Log an information.
         * @method
         * @param {string} message - The message.
         */
        this.info = function(message){
            if (!configuration.debug){
                return;
            }
            console.log(message);

        };
        /**
         * Log an error.
         * @method
         * @param {string} message - The error message.
         * @param {object} reason - The error reason.
         */
        this.error = function(message, reason){
            if (!configuration.debug){
                return;
            }
            
            if (reason){
                console.log('ERROR: ' + message, reason);
            } else {
                console.log(message);
            }
        };
    }    
    
    // define angular factory
    angular.module('app').service('logger', LoggerService);
    
})(window.angular);