"use strict;"
const { assert: { equal, isDefined, isFinite, isFunction } } = require('chai');
const { subtract } = require('../js/subtract.js');

describe('subtract', () => {
  describe('function should exist', () => {
    it('should be a function', () => {
        isFunction(subtract);
    });
  });
    describe('should return a number', () => {
      it('should return a number', () => {
        isFinite(subtract(6, 4));
      });
    });
    
    
 describe('should subtract two numbers', () => {
   it('returns a number equal to inputs', () => {
     equal(subtract(2,2),0);
     equal(subtract(1,3),-2);
     equal(subtract(5,3),2);
     equal(subtract(1.66,6),-4.34);
     isNaN(subtract("x","t"));
     isNaN(subtract());
   }); 
 });

    
});