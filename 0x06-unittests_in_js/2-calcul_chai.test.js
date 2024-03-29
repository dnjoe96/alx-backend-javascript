const chai = require('chai')
const expect = chai.expect
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  describe('SUM no Round', function () {
    it('should return 5', function () {
      expect(calculateNumber('SUM', 1, 4)).equal = 5;
    });
  });

  describe('SUM first round', function () {
    it('should return 6', function () {
      expect(calculateNumber('SUM', 2.4, 4)).equal = 6;
    });
  });

  describe('SUM second round ', function () {
    it('should return 6', function () {
      expect(calculateNumber('SUM', 4, 2.4)).equal = 6;
    });
  });

  describe('SUM both round', function () {
    it('should return 6', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).equal = 6;
    });
  });

  describe('SUBTRACT no round', function () {
    it('should return 2', function () {
      expect(calculateNumber('SUBTRACT', 5, 3)).equal = 2;
    });
  });

  describe('SUBTRACT both round', function () {
    it('should return -4', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).equal = -4;
    });
  });

  describe('DIVIDE no round', function () {
    it('should return 2', function () {
      expect(calculateNumber('DIVIDE', 8, 4)).equal = 2;
    });
  });

  describe('DIVIDE first round', function () {
    it('should return 5', function () {
      expect(calculateNumber('DIVIDE', 9.5, 2)).equal = 5;
    });
  });

  describe('DIVIDE second round', function () {
    it('should return 0.2', function () {
      expect(calculateNumber('DIVIDE', 2, 9.5)).equal = 0.2;
    });
  });

  describe('DIVIDE Error', function () {
    it('should return Error', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).equal = 'Error';
    });
  });
});
