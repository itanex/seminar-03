namespace Seminar.View.Home {
    export function Configuration(
        $stateProvider: ng.ui.IStateProvider
    ) {
        $stateProvider
            .state('Home', <ng.ui.IState>{
                url: '/',
                controller: 'HomeController',
                controllerAs: 'vm',
                templateUrl: '/templates/views/home/home.html'
            });
    }
}