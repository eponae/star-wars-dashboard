import dashboard from './dashboard.component.js';
import DashboardService from './dashboard.service.js';

export default angular
  .module('starWarsDashboard.dashboard', [])
  .service('dashboardService', DashboardService)
  .component('dashboard', dashboard);
