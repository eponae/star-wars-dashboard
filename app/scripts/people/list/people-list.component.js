import peopleListTemplate from './people-list.html';

export default {
  bindings: {
    characters: '<'
  },
  template: peopleListTemplate,
  controller: class PeopleListController {}
};
