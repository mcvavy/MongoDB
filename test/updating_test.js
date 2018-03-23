//const mocha = require('mocha'); requiring mocha is not required
const assert = require('assert');

const MarioChar = require("../models/mariochar");

//Describing the test
describe('Updating records', () => {
    let char;
    beforeEach((done) => {
        char = new MarioChar({
            name: 'Mario',
            weight: 50
        });

        char.save().then(() => {
            done(); //Signal the completion of the test
        });
    });

    //Create tests
    it("Update one record in the database", (done) => {
        MarioChar.findOneAndUpdate({name: "Mario"}, {name: "Luigi"})
        .then(() => {
            MarioChar.findOne({_id: char._id}).then((result) => {
                assert(result.name === "Luigi");
                done();
            });
        });
    });


    it("Increments the weight by 1", (done) => {
        MarioChar.update({}, {$inc: {weight: 1}})
        .then(() => {
            MarioChar.findOne({name: "Mario"})
            .then((res) => {
                assert(res.weight === 51);
                done();
            })
        });
    });

});