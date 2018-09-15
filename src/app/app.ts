namespace Seminar {
    // Create the App Module
    let module: ng.IModule = angular.module('app', [
        /* Third Party Modules */
        'ngResource',
        'ui.router',

        /* Application Modules */
        'app.view'
    ]);

    module.config(Seminar.Configuration);
}