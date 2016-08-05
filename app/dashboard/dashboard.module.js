import Dashboard from './dashboard.component';
import DashboardTemplate from './dashboard.html!text';
import './assets/css/dashboard.css!css';

export default angular.module('dashboardModule', [])
        .component('dashboard', {
            template: DashboardTemplate,
            controller: Dashboard,
            controllerAs: 'Dashboard'
        });
