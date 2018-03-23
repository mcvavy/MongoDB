//const mocha = require('mocha'); requiring mocha is not required
const assert = require('assert');

const MarioChar = require("../models/mariochar");

//Describing the test
describe('Finding records', () => {
    let char;
    beforeEach((done) => {
        char = new MarioChar({
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

    it("Finds one record by ID from the database", (done) => {
        MarioChar.findOne({_id: char._id})
        .then((result) => {
            //ObjectId("5ab1f417025dcc0ee8199adf") is an object
            //hence needs converting to a string
            assert(result._id.toString() === char._id.toString());
            done();
        });
    });

});