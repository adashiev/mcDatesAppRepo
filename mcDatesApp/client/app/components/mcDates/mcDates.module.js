import angular from 'angular';
import mcDatesComponent from './mcDates.component';

const mcDatesModule = angular.module('mcDates', [])
  .component('mcDates', mcDatesComponent);
export default mcDatesModule;