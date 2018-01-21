import { dashboard } from './dashboard.component.js';
import { DashboardService } from './dashboard.service.js';

const dashboardModule = angular
  .module('starWarsDashboard.dashboard', [])
  .service('dashboardService', DashboardService)
  .component('dashboard', dashboard);

export { dashboardModule };
