var assert = require('assert');

import { Seats } from '../app/javascript/packs/seats';
// var seats = require('../app/javascript/packs/seats');


describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.strictEqual([1, 2, 3].indexOf(4), -1);
      console.log(Seats.distanceFromMidpoint(5, 5));

    });
  });
});