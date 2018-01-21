function configuration($stateProvider, $urlRouterProvider, $mdAriaProvider) {
  $mdAriaProvider.disableWarnings();

  $urlRouterProvider.otherwise('/dashboard');

  $stateProvider.state('dashboard', {
    url: '/dashboard',
    template: '<dashboard></dashboard>'
  });
}
configuration.$inject = ['$stateProvider', '$urlRouterProvider', '$mdAriaProvider'];

export { configuration };
