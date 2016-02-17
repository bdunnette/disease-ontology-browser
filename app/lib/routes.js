Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('disease/:doid', {
  name: 'disease',
  controller: 'DiseaseController',
  where: 'client'
});

Router.route('import', {
  name: 'import',
  controller: 'ImportController',
  where: 'client'
});
