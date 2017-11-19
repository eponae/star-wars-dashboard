export default class DashboardService {
  constructor(peopleService) {
    this.peopleService = peopleService;
  }

  getCharacters(page, searchedText) {
    return this.peopleService.getCharacters(page, searchedText).then(characters => characters);
  }
}
DashboardService.$inject = ['peopleService'];
