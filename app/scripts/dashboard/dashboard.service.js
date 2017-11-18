export default class DashboardService {
  constructor(peopleService) {
    this.peopleService = peopleService;
  }

  findCharacter(searchedText) {
    return this.peopleService.findACharacter(searchedText).then(character => character);
  }

  getCharacters() {
    return this.peopleService.getCharactersList().then(characters => characters);
  }
}
DashboardService.$inject = ['peopleService'];
