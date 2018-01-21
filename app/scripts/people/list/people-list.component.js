import peopleListTemplate from './people-list.html';

class PeopleListController {
  constructor(peopleService) {
    this.peopleService = peopleService;
  }

  getLastPageNum(characters) {
    if (characters.count % 10 === 0) {
      this.lastPage = Math.trunc(characters.count / 10);
    } else {
      this.lastPage = Math.trunc(characters.count / 10) + 1;
    }
  }

  $onChanges() {
    if (this.characters) {
      this.getLastPageNum(this.characters);
    }
  }

  goToPage(pageKey) {
    if (this.characters[pageKey]) {
      this.peopleService.getPage(this.characters[pageKey]).then(characters => {
        this.characters = characters;
      });
    }
  }

  goToFirstOrLastPage(pageNum) {
    this.peopleService.getCharacters(pageNum, this.searchedText).then(characters => {
      this.characters = characters;
    });
  }
}
PeopleListController.$inject = ['peopleService'];

const peopleList = {
  bindings: {
    characters: '<',
    searchedText: '@'
  },
  template: peopleListTemplate,
  controller: PeopleListController
};

export { peopleList };
