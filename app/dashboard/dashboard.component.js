/**
 * Represents the dashboard component.
 */
class Dashboard {

    /**
     * Component constructor.
     * @constructor
     * @param {object} $log - Angular logger service.
     */
    constructor($log){
        $log.debug('Display dashboard');
    } 
}
    
Dashboard.$inject = ['$log'];

export default Dashboard;

    
