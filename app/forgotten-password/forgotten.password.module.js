import ForgottenPassword from './forgotten.password.component';
import ForgottenPasswordTemplate from './forgotten.password.html!text';

export default angular.module('forgottenPasswordModule', [])
        .component('forgottenPassword', {
            template: ForgottenPasswordTemplate,
            controller: ForgottenPassword,
            controllerAs: 'fpd'
        });
