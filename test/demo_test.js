const mocha = require('mocha');
const assert = require('assert');

//Describing the test
describe('some demo tests', () => {
    //Create tests
    it("Adds two numbers together", () =>{
        assert(2+3 === 5);
    });
});