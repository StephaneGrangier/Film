'use strict';

describe('Service: MovieDB', function () {

  // load the service's module
  beforeEach(module('filmApp'));

  // instantiate service
  var MovieDB;
  beforeEach(inject(function (_MovieDB_) {
    MovieDB = _MovieDB_;
  }));

  it('should do something', function () {
    expect(!!MovieDB).toBe(true);
  });

});
