"use strict;"
const { assert: { isUndefined, equal, isFinite, isFunction } } = require('chai');
const { add } = require('../js/add.js');

describe('add', () => {
  describe('function should exist', () => {
    it('should be a function', () => {
        isFunction(add);
    });
  });
  describe('should return a number', () => {
    it('should return a number', () => {
      isFinite(add(1,2));
    });
  });
  describe('should add two numbers', () => {
    it('returns a number equal to inputs', () => {
      equal(add(2,2),4);
      equal(add(1,3),4);
      equal(add(1,3,5),9);
      equal(add(1.66,6),7.66);
      isNaN(add("x","t"));
    }); 
  });
});
