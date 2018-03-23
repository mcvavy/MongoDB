//const mocha = require('mocha'); requiring mocha is not required
const assert = require('assert');

const MarioChar = require("../models/mariochar");

//Describing the test
describe('Finding records', () => {

    beforeEach((done) => {
        let char = new MarioChar({
            name: 'Mario'
        });

        char.save().then(() => {
            assert(char.isNew === false);
            done(); //Signal the completion of the test
        });
    });

    //Create tests
    it("Finds one record from the database", (done) => {
        MarioChar.findOne({name: 'Mario'})
        .then((result) => {
            assert(result.name === 'Mario');
            done();
        });
    });
});