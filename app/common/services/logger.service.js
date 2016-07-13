import app from 'app/app.config';
/**
 * Represents the logger service.
 */
class LoggerService(){     

    /*@ngInject*/
    constructor(debug){
        this.debug = debug;
    }   
     /**
     * Log an information.
     * @param {string} message - The message.
     */
    info(message){
        if (!configuration.debug){
            return;
        }
        console.log(message);

    };
    /**
     * Log an error.
     * @param {string} message - The error message.
     * @param {object} reason - The error reason.
     */
    error(message, reason){
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
app.service('logger', LoggerService);