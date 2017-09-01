"use strict;"
const { assert: { isNaN, equal, isFinite, isUndefined, isNumber, isFunction } } = require('chai');
const { divide } = require('../js/divide.js');

describe('divide', () => {
  describe('function should exist', () => {
    it('should be a function', () => {
      isFunction(divide);
    });
  });

  describe('should return a number', () => {
    it('should return a number', () => {
      isFinite(divide(6, 3));
    });
  });
  
  describe('should divide two numbers', () => {
  it('returns a number equal to inputs', () => {
   equal(divide(2,2),1);
   equal(divide(1,3),.33);
   equal(divide(5,3),1.67);
   equal(divide(6,1),6);
   isNumber(divide(6,0));
   isNaN(divide("x","t"));
   isNaN(divide());
  }); 
  });


});

  