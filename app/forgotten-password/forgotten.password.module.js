import ForgottenPassword from './forgotten.password.component';
import ForgottenPasswordTemplate from './forgotten.password.html!text';

export default angular.module('forgottenPassword', [])
        .component(ForgottenPassword.name, {
            template: ForgottenPasswordTemplate,
            controller: ForgottenPassword,
            controllerAs: 'fpd'
        });
