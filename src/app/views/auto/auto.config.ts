namespace Seminar.View.Auto {
    export function Configuration(
        $stateProvider: ng.ui.IStateProvider
    ) {
        $stateProvider
            .state('Auto', <ng.ui.IState>{
                url: '/auto',
                controller: 'AutoController',
                controllerAs: 'vm',
                templateUrl: '/templates/views/auto/auto.html'
            });
    }
}