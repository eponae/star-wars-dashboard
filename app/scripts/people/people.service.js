import PeopleResource from './people.resource.js';

export default class PeopleService {
  constructor($http, API_URL, errorService) {
    this.$http = $http;
    this.API_URL = API_URL;
    this.errorService = errorService;
  }

  findACharacter(searchedText) {
    return this.$http
      .get(this.API_URL + '?search=' + searchedText)
      .then(response => response.data.results.map(character => new PeopleResource(character)))
      .catch(() => this.errorService.showSimpleToast('Error while searching for a character.'));
  }

  getCharactersList(page = 1) {
    return this.$http
      .get(this.API_URL + '?page=' + page)
      .then(response => ({
        data: response.data.results.map(character => new PeopleResource(character)),
        count: response.data.count
      }))
      .catch(() => this.errorService.showSimpleToast('Impossible to get the list of characters.'));
  }
}
PeopleService.$inject = ['$http', 'API_URL', 'errorService'];
