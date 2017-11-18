import peopleTemplate from './people-details.html';

export default {
  bindings: {
    character: '<'
  },
  template: peopleTemplate,
  controller: class PeopleController {}
};
