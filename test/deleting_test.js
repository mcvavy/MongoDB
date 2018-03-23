//const mocha = require('mocha'); requiring mocha is not required
const assert = require('assert');

const MarioChar = require("../models/mariochar");

//Describing the test
describe('Deleting records', () => {
    let char;
    beforeEach((done) => {
        char = new MarioChar({
            name: 'Mario'
        });

        char.save().then(() => {
            done(); //Signal the completion of the test
        });
    });

    //Create tests
    it("Delete one record from the database", (done) => {
        MarioChar.findOneAndRemove({ name: 'Mario' })
            .then((result) => {
                MarioChar.findOne({ name: "Mario" })
                    .then((result) => {
                        assert(result === null);
                        done();
                    });
            });
    });

});