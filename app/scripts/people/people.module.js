import people from './details/people.component.js';
import peopleList from './list/people-list.component.js';

export default angular
  .module('starWarsDashboard.people', [])
  .component('people', people)
  .component('peopleList', peopleList);
