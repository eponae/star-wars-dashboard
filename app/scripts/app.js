import 'angular';
import 'angular-ui-router';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';

import '../assets/sass/app.scss';

import { ErrorService } from './error-service.js';
import { peopleModule } from './people/people.module.js';
import { dashboardModule } from './dashboard/dashboard.module.js';
import { configuration } from './app-config.js';

angular
  .module('starWarsDashboard', ['ui.router', 'ngMaterial', peopleModule.name, dashboardModule.name])
  .service('errorService', ErrorService)
  .constant('API_URL', 'https://swapi.co/api/people/')
  .config(configuration);
