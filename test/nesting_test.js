const assert = require('assert');
const mongoose = require("mongoose");
const Author = require("../models/author");


//Describe our tests
describe("Nesting records", () => {

    beforeEach((done) => {
        mongoose.connection.collections.authors.drop(() => done());
    });

    it("Create an author with sub-document", (done) => {
        let pat = new Author({
            name: "Michael Oyibo",
            books: [{ title: "Things fall apart", pages: 400 }]
        });

        pat.save().then(() => {
            Author.findOne({ name: "Michael Oyibo" })
                .then((res) => {
                    assert(res.books.length === 1);
                    done();
                });
        });
    });

    it("Adds a book to an author", (done) => {
        let pat = new Author({
            name: "Michael Oyibo",
            books: [{ title: "Things fall apart", pages: 400 }]
        });

        pat.save().then(() => {
            Author.findOne({ name: "Michael Oyibo" })
                .then((res) => {
                    // Add a book to the books array

                    res.books.push({ title: "Wise man's fear", pages: 500 });
                    res.save().then(() => {
                        Author.findOne({ name: "Michael Oyibo" }).then((res) => {
                            assert(res.books.length === 2);
                            done();
                        });
                    });
                });
        });
    });
});