/**
 * Represents the logger service.
 */
class LoggerService {     

    constructor(debug){
        this.debug = debug;
    }   
     /**
     * Log an information.
     * @param {string} message - The message.
     */
    info(message){
        if (!this.debug){
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
        if (!this.debug){
            return;
        }
        
        if (reason){
            console.log('ERROR: ' + message, reason);
        } else {
            console.log(message);
        }
    };
}    

LoggerService.$inject = ['debug'];

export default LoggerService;

