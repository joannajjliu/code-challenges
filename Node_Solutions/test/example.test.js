const assert = require('assert').strict;
const expect = require('chai').expect;
const should = require('chai').should();

describe('Simple Math Test with Node Assert', () => {
 it('should return 2', () => {
        assert.strictEqual(1 + 1, 2);
    });
 it('should return 9', () => {
        assert.strictEqual(3 * 3, 9);
    });
});

describe('Simple Math Test with Chai', () => {
    it('should return 2', () => {
           expect(1 + 1).to.equal(2);
       });
    it('should return 9', () => {
           expect(3 * 3).to.equal(9);
       });
    // it ('true should equal true', () => {
    //     isTrue.should.equal(true);
    // })
});