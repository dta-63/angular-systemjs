import Login from './login.component';
import LoginTemplate from './login.html!text';

export default angular.module('login', [])
        .component(Login.name, {
            template: LoginTemplate,
            controller: Login,
            controllerAs: 'Login'
        });
