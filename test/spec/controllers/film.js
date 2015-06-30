'use strict';

describe('Controller: FilmCtrl', function () {

  // load the controller's module
  beforeEach(module('filmApp'));

  var FilmCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FilmCtrl = $controller('FilmCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
