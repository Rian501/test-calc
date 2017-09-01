"use strict;"
const { assert: { isNaN, equal, isDefined, isString, isFunction } } = require('chai');
const { multiply } = require('../js/multiply.js');

describe('multiply', () => {
    it('should be a function', () => {
      isFunction(multiply);
    });

    describe('should return a number', () => {
      it('should return a number', () => {
        isFinite(multiply(6, 4));
      });
    });
    
    
 describe('should multiply two numbers', () => {
   it('returns a number equal to inputs', () => {
     equal(multiply(2,2),4);
     equal(multiply(1,3),3);
     equal(multiply(5,3),15);
     equal(multiply(1.66,6),9.96);
     isNaN(multiply("x","t"));
     isNaN(multiply());
   }); 
 });

});