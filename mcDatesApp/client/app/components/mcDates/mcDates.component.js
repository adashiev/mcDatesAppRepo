import template from './mcDates.component.html';
import controller from './mcDates.controller.js';
import './mcDates.component.scss';

let mcDatesComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'mcDatesController'
};
export default mcDatesComponent;