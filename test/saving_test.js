//const mocha = require('mocha'); requiring mocha is not required
const assert = require('assert');

const MarioChar = require("../models/mariochar");

//Describing the test
describe('Saving records', () => {
    //Create tests
    it("Saves a record to the database", (done) => {
        let char = new MarioChar({
            name: 'Mario'
        });

        char.save().then(() => {
            assert(char.isNew === false);
            done(); //Signal the completion of the test
        });
    });
});