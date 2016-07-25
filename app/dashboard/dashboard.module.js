import Dashboard from './dashboard.component';
import DashboardTemplate from './dashboard.html!text';

export default angular.module('dashboardModule', [])
        .component('dashboard', {
            template: DashboardTemplate,
            controller: Dashboard,
            controllerAs: 'Dashboard'
        });
