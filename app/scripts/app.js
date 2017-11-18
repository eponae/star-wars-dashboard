import 'angular';
import 'angular-ui-router';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';

import '../assets/sass/app.scss';

import ErrorService from './error-service.js';
import people from './people/people.module.js';
import dashboard from './dashboard/dashboard.module.js';
import config from './app-config.js';

export default angular
  .module('starWarsDashboard', ['ui.router', 'ngMaterial', people.name, dashboard.name])
  .service('errorService', ErrorService)
  .constant('API_URL', 'https://swapi.co/api/people/')
  .config(config);
