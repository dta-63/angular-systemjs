import { Login } from './login.component';
import loginTemplate from "./login.html!text";

import { ForgottenPassword } from './forgotten.password.component';
import forgottenPasswordTemplate from "./forgotten.password.html!text";

// Declare module dependencies
let imports = [];

export default angular.module('login', imports)
        .component(Login.name, {
            template: loginTemplate,
            controller: Login,
            controllerAs: 'Login'
        })
        .component(ForgottenPassword.name, {
            template: forgottenPasswordTemplate,
            controller: ForgottenPassword,
            controllerAs: 'fpd'
        });
