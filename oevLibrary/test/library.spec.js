import chai from 'chai';
import Library from '../lib/OpenEarthView.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of my OpenEarthView library', function () {
  before(function () {
    lib = new OpenEarthView();
  });
  describe('when I need the name', function () {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('OpenEarthView');
    });
  });
});
