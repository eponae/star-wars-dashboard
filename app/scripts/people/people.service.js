import { PeopleResource } from './people.resource.js';

class PeopleService {
  constructor($http, API_URL, errorService) {
    this.$http = $http;
    this.API_URL = API_URL;
    this.errorService = errorService;
  }

  getCharacters(page = 1, searchedText = '') {
    return this.$http
      .get(this.API_URL + '?page=' + page + '&search=' + searchedText)
      .then(response => ({
        data: response.data.results.map(character => new PeopleResource(character)),
        previous: response.data.previous,
        next: response.data.next,
        count: response.data.count
      }))
      .catch(() => this.errorService.showSimpleToast('Error while searching for a character.'));
  }

  getPage(url) {
    return this.$http
      .get(url)
      .then(response => ({
        data: response.data.results.map(character => new PeopleResource(character)),
        previous: response.data.previous,
        next: response.data.next,
        count: response.data.count
      }))
      .catch(() => this.errorService.showSimpleToast('Error while getting the new page.'));
  }
}
PeopleService.$inject = ['$http', 'API_URL', 'errorService'];

export { PeopleService };
