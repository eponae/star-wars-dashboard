import 'lodash';
import 'angular';
import 'angular-ui-router';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';

import '../assets/sass/app.scss';

import config from './app-config.js';
import ErrorService from './error-service.js';
import dashboard from './dashboard/dashboard.module.js';
import people from './people/people.module.js';

export default angular
  .module('starWarsDashboard', ['ui.router', 'ngMaterial', dashboard.name, people.name])
  .constant('API_URL', 'https://swapi.co/api/people/')
  .config(config)
  .service('errorService', ErrorService);
