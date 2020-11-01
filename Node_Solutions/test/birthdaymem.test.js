const birthdayMemorization = require('../BirthdayMemorization/birthdaymem');

const assert = require('assert').strict;
const expect = require('chai').expect;
const should = require('chai').should();

describe('Birthday Memorization', () => {
    const input1 = ["3", "Sanna 1 16/03", "Simon 2 16/03", "Saga 3 14/10"];
    const input2 = ["10", "Oden 78 03/12", "Tor 132 14/05", "Freja 10000 14/05", "Loke 512 12/10", "Hel 14 04/05","Fjorgynn 532 13/05","Hildegun 500 13/05","Vindsval 17 03/12","Snotra 20 04/05","Kvaser 420 03/12"];
    it('Sample Input 1', () => {
        assert.deepStrictEqual(birthdayMemorization(input1), ["2", "Saga", "Simon"]);
    });
    it('Sample Input 2', () => {
        expect(birthdayMemorization(input2)).to.eql([
            "5",
            "Fjorgynn",
            "Freja",
            "Kvaser",
            "Loke",
            "Snotra"
        ]);
    });
});
