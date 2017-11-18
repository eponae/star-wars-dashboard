import dashboardTemplate from './dashboard.html';

class DashboardController {
  constructor(dashboardService) {
    this.dashboardService = dashboardService;
  }

  initCharacters() {
    this.dashboardService.getCharacters().then(characters => {
      this.characters = characters;
    });
  }

  $onInit() {
    this.initCharacters();
  }
}
DashboardController.$inject = ['dashboardService'];

export default {
  template: dashboardTemplate,
  controller: DashboardController
};
