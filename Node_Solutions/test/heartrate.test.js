const heartRate = require('../HeartRate/heartrate');

const assert = require('assert').strict;
const expect = require('chai').expect;
const should = require('chai').should();

describe('Heart Rate', () => {
    const input1 = [
        "2",
        "6 5.0000",
        "2 3.1222"
    ];
    it('Sample Input 1', () => {
        assert.deepStrictEqual(
            heartRate(input1), 
            ["60.0000 72.0000 84.0000", "19.2172 38.4344 57.6517"]
        );
    });
});
