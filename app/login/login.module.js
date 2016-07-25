import Login from './login.component';
import LoginTemplate from './login.html!text';

export default angular.module('loginModule', [])
        .component('login', {
            template: LoginTemplate,
            controller: Login,
            controllerAs: 'Login'
        });
