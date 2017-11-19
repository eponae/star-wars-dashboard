import dashboardTemplate from './dashboard.html';

class DashboardController {
  constructor(dashboardService) {
    this.dashboardService = dashboardService;
  }

  searchCharacter() {
    this.dashboardService.getCharacters(this.page, this.searchedText).then(characters => {
      this.characters = characters;
    });
  }

  $onInit() {
    this.page = 1;
    this.searchedText = '';
    this.searchCharacter();
  }
}
DashboardController.$inject = ['dashboardService'];

export default {
  template: dashboardTemplate,
  controller: DashboardController
};
