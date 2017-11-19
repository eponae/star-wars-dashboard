import peopleList from './list/people-list.component.js';
import PeopleService from './people.service.js';

export default angular
  .module('starWarsDashboard.people', [])
  .service('peopleService', PeopleService)
  .component('peopleList', peopleList);
