import angular from 'angular';
    import McDatesModule from './mcDates/mcDates.module';

const ComponentsModule = angular.module('app.components',[
       McDatesModule.name 
]);

export default ComponentsModule;