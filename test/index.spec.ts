import {
  isGenFunc
} from './../src/index';
import {
  expect
} from 'chai';

describe('isGenFunc', () => {

  it('should return false for functions', () => {
    expect(isGenFunc(function(){})).to.be.false;
  });

  it('should return true for generator functions', () => {
    expect(isGenFunc(function(){})).to.be.false;
  });

  it('should return false for async functions', () => {
    expect(isGenFunc(async function(){})).to.be.false;
  });

  it('should return true for generator functions', () => {
    expect(isGenFunc(function *(): IterableIterator<any>{})).to.be.true;
  });

  it('should return true for async generator functions', () => {
    expect(isGenFunc(async function *(): AsyncIterableIterator<any>{})).to.be.true;
  });

});
