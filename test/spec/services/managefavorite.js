'use strict';

describe('Service: manageFavorite', function () {

  // load the service's module
  beforeEach(module('filmApp'));

  // instantiate service
  var manageFavorite;
  beforeEach(inject(function (_manageFavorite_) {
    manageFavorite = _manageFavorite_;
  }));

  it('should do something', function () {
    expect(!!manageFavorite).toBe(true);
  });

});
